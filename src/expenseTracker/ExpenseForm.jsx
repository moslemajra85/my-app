import { useState } from 'react';
const ExpenseForm = ({ createExpenses }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(+event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const groceriesData = {
      name,
      price,
      category,
    };

    createExpenses(groceriesData);
  };
  return (
    <div className="border p-4" style={{ maxWidth: '450px' }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name:
          </label>
          <input
            onChange={handleNameChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Price:
          </label>
          <input
            onChange={handlePriceChange}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Category</label>
          <select
            onChange={handleCategoryChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value=""></option>
            <option value="groceries">Groceries</option>
            <option value="entertainment">Entertainment</option>
            <option value="tools">Tools</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
