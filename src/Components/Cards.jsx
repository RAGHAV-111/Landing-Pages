const card123 = [
  {
    id: 1,
    img1: "https://picsum.photos/600/400/?random",
    title: "Article Title 1",
    date: "11/1/19 1 ",
    name: "Author Name 1 ",
    img2: "https://picsum.photos/32/32/?random",
  },
  {
    id: 2,
    img1: "https://picsum.photos/600/400/?random",
    title: "Article Title 2",
    date: "11/1/19 2 ",
    name: "Author Name 2 ",
    img2: "https://picsum.photos/32/32/?random",
  },
  {
    id: 3,
    img1: "https://picsum.photos/600/400/?random",
    title: "Article Title 3",
    date: "11/1/19 3 ",
    name: "Author Name 3 ",
    img2: "https://picsum.photos/32/32/?random",
  },
];

function Cards() {
  return (
    <>
     
          {card123.map((data, index) => {
            return (
              <div key={index} className="flex content-center align-middle  lg:w-1/3 ">
               
                <div className=" mx-6">
                  
                  <article className="overflow-hidden rounded-xl shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src={data.img1}
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          {data.title}
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="#"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          src={data.img2}
                        />
                        <p className="ml-2 text-sm">{data.name}</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="#"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                  
                </div>
              </div>
            );
          })}
       
    </>
  );
}
export default Cards;
