import { render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it.todo('has an input field for a new item', () => { });

it(
  'has a "Add New Item" button that is disabled when the input is empty',
  () => {
    render(<PackingList />);
    const newItemInput = screen.getByLabelText('New Item Name');
    const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

    expect(newItemInput).toHaveValue('');
    expect(addNewItemButton).toBeDisabled();
  },
);

it(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {
    render(<PackingList />);
    const { user } = render(<PackingList />);
    const newItemInput = screen.getByLabelText('New Item Name');
    const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });

    await user.type(newItemInput, 'Foo');
    expect(addNewItemButton).toBeEnabled();

  },
);

it(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => { },
);
