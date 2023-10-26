
export default function Home() {
  return (
    <div className="p-8 h-screen bg-neutral-900 text-neutral-100">
      <h1 className="text-3xl font-bold flex items-center gap-3 before:w-0.5 before:bg-teal-700 before:h-5">Hello World</h1> 
      <p>Conheça a Black Friday LactoFlow</p>
      <button disabled className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed" >Se inscreva</button>
    </div>
      )

}
