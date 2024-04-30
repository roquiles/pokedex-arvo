import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '..';

const onSearchMock = jest.fn();

describe('SearchBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a Search input', () => {
    render(<SearchBar onSearch={onSearchMock} isLoadingSearch={false} />);

    const searchInput = screen.getByRole('textbox');

    expect(searchInput).toBeInTheDocument();
  });

  it('should call onSearch when form is submitted and input value is valid', () => {
    render(<SearchBar onSearch={onSearchMock} isLoadingSearch={false} />);

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: '10' } });
    fireEvent.submit(searchInput);

    expect(onSearchMock).toHaveBeenCalledWith('10');
  });

  it('should not call onSearch when input value is invalid', () => {
    render(<SearchBar onSearch={onSearchMock} isLoadingSearch={false} />);

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: '***' } });
    fireEvent.submit(searchInput);

    expect(onSearchMock).not.toHaveBeenCalled();
  });

  it('should not call onSearch when input value is empty', () => {
    render(<SearchBar onSearch={onSearchMock} isLoadingSearch={false} />);

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.submit(searchInput);

    expect(onSearchMock).not.toHaveBeenCalled();
  });

  it('should not call onSearch when last searched value equals the current search', () => {
    render(<SearchBar onSearch={onSearchMock} isLoadingSearch={false} />);

    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: '10' } });
    fireEvent.submit(searchInput);
    fireEvent.submit(searchInput); // Trying to submit again

    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  it('should disable input and Search button when search is loading', () => {
    render(<SearchBar onSearch={onSearchMock} isLoadingSearch />);

    const searchButton = screen.getByText('Search');
    const searchInput = screen.getByRole('textbox');

    expect(searchButton).toBeDisabled();
    expect(searchInput).toBeDisabled();
  });
});
