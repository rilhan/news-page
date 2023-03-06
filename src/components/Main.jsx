export default function Main() {
    return (
        <main className="p-4 flex flex-col justify-center items-center">
            <div className="lg:w-10/12">
                <div className="lg:flex lg:gap-8">
                    <section className="lg:w-[70%]">
                        <div>
                            <img src="/image-web-3-mobile.jpg" className="lg:hidden" />
                            <img src="/image-web-3-desktop.jpg" className="hidden lg:block" />
                        </div>
                        <div className="lg:flex">
                            <div className="lg:w-1/2 lg:text-6xl lg:pr-35 mt-6 pr-10 text-4xl font-extrabold">
                                <h1>The Bright Future of Web 3.0?</h1>
                            </div>
                            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:mt-8 lg:pr-8 mt-3 text-dark_grayish_blue">
                                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                    But is it really fulfilling its promise?</p>
                                <button className="lg:w-1/2 mt-4 bg-soft_red text-off_white px-10 py-3 tracking-widest font-bold hover:bg-very_dark_blue">READ MORE</button>
                            </div>
                        </div>
                    </section>

                    <section className="lg:w-[30%] lg:mt-0 lg:px-6 mt-14 bg-very_dark_blue text-off_white p-4">
                        <h1 className="lg:text-4xl text-soft_orange text-3xl font-bold mt-2">New</h1>
                        <div className="mt-6 border-b border-b-dark_grayish_blue">
                            <h2 className="mb-1 font-bold text-lg cursor-pointer hover:text-soft_orange">Hydrogen VS Electric Cars</h2>
                            <p className="mb-5 text-grayish_blue">Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>
                        <div className="mt-6 border-b border-b-dark_grayish_blue">
                            <h2 className="mb-1 font-bold text-lg cursor-pointer hover:text-soft_orange">The Downsides of AI Artistry</h2>
                            <p className="mb-5 text-grayish_blue">What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>
                        <div className="mt-6">
                            <h2 className="mb-1 font-bold text-lg cursor-pointer hover:text-soft_orange">Is VC Funding Drying Up?</h2>
                            <p className="mb-2 text-grayish_blue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </div>
                    </section>
                </div>
                <section className="my-14 lg:flex lg:justify-between">
                    <div className="flex h-28 lg:mr-10 ">
                        <div className="w-1/3">
                            <img className="h-full" src="/image-retro-pcs.jpg" />
                        </div>
                        <div className="flex flex-col justify-between w-2/3">
                            <h1 className="text-2xl font-bold text-grayish_blue">01</h1>
                            <h2 className="font-bold text-lg cursor-pointer hover:text-soft_red">Reviving Retro PCs</h2>
                            <p className="text-dark_grayish_blue">What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:mr-10 mt-6 flex h-28">
                        <div className="w-1/3">
                            <img className="h-full" src="/image-top-laptops.jpg" />
                        </div>
                        <div className="flex flex-col justify-between w-2/3">
                            <h1 className="text-2xl font-bold text-grayish_blue">02</h1>
                            <h2 className="font-bold text-lg cursor-pointer hover:text-soft_red">Top 10 Laptops of 2022</h2>
                            <p className="text-dark_grayish_blue">Our best picks for various needs and budgets.</p>
                        </div>
                    </div>
                    <div className="lg:mt-0 mt-6 flex h-28">
                        <div className="w-1/3">
                            <img className="h-full" src="/image-gaming-growth.jpg" />
                        </div>
                        <div className="flex flex-col justify-between w-2/3">
                            <h1 className="text-2xl font-bold text-grayish_blue">03</h1>
                            <h2 className="font-bold text-lg cursor-pointer hover:text-soft_red">The Growth of Gaming</h2>
                            <p className="text-dark_grayish_blue">How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

/*

  01
  Reviving Retro PCs
  What happens when old PCs are given modern upgrades?

  02
  Top 10 Laptops of 2022
  Our best picks for various needs and budgets.

  03
  The Growth of Gaming
  How the pandemic has sparked fresh opportunities.
*/