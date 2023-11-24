import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Not found page, please go to
      <Link to="/"> Homepage</Link>
    </div>
  );
}
