const PurchasesPage = () => {
    const products = [{}, {}, {}, {}, {}, {}];

    return (
        <div className=" my-10 w-full grid grid-cols-5 gap-10">
            {products.map((item, id) => {
                return (
                    <div
                        key={id}
                        className=" w-full rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
                    >
                        <div>
                            <img
                                src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="py-4 px-4 bg-gray-900 ">
                            <h3 className="text-lg font-semibold">
                                Apple MacBook Pro M1 13.3&quot; Silver
                                16GB/512GB (MYDC2FN/A-16GB)
                            </h3>
                            <p className="mt-4 text-lg font-thin">$ 2400</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PurchasesPage;
