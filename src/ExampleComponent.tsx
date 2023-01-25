const ExampleComponent = () => {
  return (
    <div className="max-w-md overflow-hidden rounded-3xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1674560109079-0b1cd708cc2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Functionality
          </div>
          <a
            href="#"
            className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
          >
            Tailwind might work for you
          </a>
          <p className="mt-2 text-slate-500">
            Looking to quicken your styling pace at the possible detriment of
            your understanding of CSS? This might just be the path forward for
            you!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExampleComponent
