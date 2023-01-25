import ExampleComponent from './ExampleComponent'

function App() {
  return (
    <main>
      <div className="flex h-[50vh] items-center justify-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-600 to-purple-600">
        <div>
          <h1 className="text-8xl font-bold text-white">Tailwind. Yes.</h1>
          <p className="text-center text-xl leading-loose text-white">
            Have I joined the dark side? I'm not sure yet.
          </p>
          <button className="mx-auto mt-4 block rounded-xl bg-white px-5 py-3 text-lg font-semibold text-black shadow-sm shadow-indigo-900">
            Join Now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center bg-indigo-50 py-10">
        <div className="flex flex-col gap-3">
          <ExampleComponent />
          <ExampleComponent />
          <ExampleComponent />
          <ExampleComponent />
        </div>
      </div>
    </main>
  )
}

export default App
