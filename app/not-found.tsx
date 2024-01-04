export default function NotFound() {
    return (
      <>
        <section>
          <div className="min-h-screen px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-36">
            <div className="flex flex-row">
              <div className="flex flex-col w-full mb-12">
                <h2 className="text-5xl max-w-xl mt-8 font-spooky">404</h2>
                <p className="text-2xl max-w-xl mt-4">Ooops!</p>
                <p className="text-2xl max-w-xl mt-4">Page Not Found</p>
                <p className=" max-w-xl mt-8 text-left pb-10 mt">
                  This page doesn&apos;t exist or was removed! <br /> We suggest
                  you back to the homepage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }