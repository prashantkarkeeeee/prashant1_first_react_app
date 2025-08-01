function Box(props) {
  return (
    <div className="bg-white flex flex-col items-center justify-between gap-2 p-4  w-[400px] shadow rounded-2xl ">
      <i className="fa-solid fa-user text-3xl"></i>
      <p className="text-2xl text-amber-300">{props.title}</p>

      <p>{props.description}</p>
      <button className="bg-amber-300 px-4 py-2 rounded-full ">
        <a href="">{props.buttonlebel}</a>
      </button>
    </div>
  );
}
export default Box;
