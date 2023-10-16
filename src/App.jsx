import Form from './assets/components/Form/Form';
import Header from './assets/components/Header/Header';
import Songs from './assets/components/Songs/Songs';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-t from-slate-900 to-slate-600">
        <Songs />
        <Form />
      </div>
    </>
  );
}
