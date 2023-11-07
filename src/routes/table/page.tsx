import { Link } from "react-router-dom";

const TablePage = () => {
  return (
    <>
      <Link to="faker">
        <button type="button" className="bg-sky-200 p-1 ml-2 my-2 rounded-md">
          Faker
        </button>
      </Link>
      <div>Table page</div>
    </>
  );
};

export default TablePage;
