/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Home from '../Home';

jest.mock('axios');

describe('Home', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] });
    render(<Home />);
  });

  test('renders the heading', () => {
    const heading = screen.getByText('Lista de Personagens');
    expect(heading).toBeInTheDocument();
  });

  test('renders loading message when characters are being fetched', () => {
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders characters when characters are fetched', async () => {
    const characters = [
      { id: 1, name: 'Character 1', description: 'Description 1', picture: 'picture1.jpg' },
      { id: 2, name: 'Character 2', description: 'Description 2', picture: 'picture2.jpg' },
    ];
    axios.get.mockResolvedValue({ data: characters });

    await screen.findByText('Character 1');
    await screen.findByText('Character 2');

    const character1 = screen.getByText('Character 1');
    const character2 = screen.getByText('Character 2');
    expect(character1).toBeInTheDocument();
    expect(character2).toBeInTheDocument();
  });

  test('opens the modal when the add button is clicked', () => {
    const addButton = screen.getByRole('button', { name: 'Add Character' });
    fireEvent.click(addButton);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  test('closes the modal when the close button is clicked', () => {
    const addButton = screen.getByRole('button', { name: 'Add Character' });
    fireEvent.click(addButton);

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  // Add more tests as needed...
});