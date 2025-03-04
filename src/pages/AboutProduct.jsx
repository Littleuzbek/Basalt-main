import "../components/AboutProduct.css"
import Presentation from "../components/Presentation"
import { Link, data, useLoaderData } from "react-router"
import { Fragment, useEffect, useState } from "react"
import { Helmet } from "react-helmet";

export default function AboutProduct() {
  const [type, setType] = useState(1);
  const product = useLoaderData();

  useEffect(()=>{
    setType(1);
  },[product])

  return (
    <>
    <Helmet>
      <title>{product?.general?.p || product?.general?.title}</title>
      <meta name="description" content="" />
    </Helmet>
    <div className="about-product-page">
      <div>
        <Presentation images={product?.images} />
        <div className="general-info">
          <h1>{product?.general?.title}</h1>
          {/* for paragraphs */}
          {product?.general?.p &&
            product?.general?.p?.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
              ))}
          <div className="consulting">
            <h2>NEED A CONSULTATION</h2>
            <Link to="/contact-us">CONTACT US</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="catalog">
          <button
            className={type === 1 ? "active" : ""}
            onClick={() => setType(1)}
            >
            Advantages
          </button>
          <button
            className={type === 2 ? "active" : ""}
            onClick={() => setType(2)}
            >
            Video
          </button>
        </div>

        {type === 1 && (
          <div className="full-info">
            <h1>{product?.adv?.list?.title}</h1>

            <div className="list" key={product?.adv?.list?.title}>
              <p>{product?.adv?.list?.p}</p>
              {product?.adv?.list?.ulListTitle?.map((title, index) => (
                <Fragment key={title + index}>
                  <h3>{title}</h3>
                  <ul>
                    {product?.adv?.list?.ulListItem?.[index]?.map((item) => (
                      <li key={item + index}>{item}</li>
                    ))}
                  </ul>
                </Fragment>
              ))}

              {product?.adv?.list?.ulListTitle === null && (
                <>
                  <ul>
                    {product?.adv?.list?.ulListItem?.map((item, index) => (
                      <li key={item + index}>{item}</li>
                      ))}
                  </ul>
                </>
              )}
            </div>

            {product?.adv?.list?.title2 && <h1>{product?.adv?.list?.title2}</h1>}

            {product?.adv?.list?.title2 && <div className="list" key={product?.adv?.list?.title2} >
              {product?.adv?.list?.ulListTitle2?.map((title, index) => (
                <Fragment key={title + index}>
                  <h3 key={title + index}>{title}</h3>
                  <ul>
                    {product?.adv?.list?.ulListItem2?.[index]?.map((item) => (
                      <li key={item + index}>{item}</li>
                      ))}
                  </ul>
                </Fragment>
              ))}

              {product?.adv?.list?.ulListTitle2 === null && (
                <>
                  <p>{product?.adv?.list?.p2}</p>
                  <ul>
                    {product?.adv?.list?.ulListItem2?.map((item, index) => (
                      <li key={item + index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>}

            {product?.adv?.list?.olListTitle && <div className="list" key={product?.adv?.list?.title}>
                <Fragment>
                  <ol>
                    {product?.adv?.list?.olListTitle?.map((title, index) => (
                      <li key={title + index}>
                        <h3>{title}</h3>
                        <ul>
                          {product?.adv?.list?.olListItem?.[index]?.map((item) => (
                            <li>{item}</li>
                            ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </Fragment>

              {/* {product?.adv?.list?.listTitle2 === null && (
                <>
                <p>{product?.adv?.list?.p2}</p>
                <ul>
                {product?.adv?.list?.listItem2?.map((item, index) => (
                  <li key={item + index}>{item}</li>
                  ))}
                  </ul>
                  </>
                )} */}
            </div>}
          </div>
        )}

        {type === 2 && (
          <div className="full-info">
            {product?.videos?.map((vid, index) => (
              <video controls key={"vid" + index} preload="metadata">
                <source src={vid} type="video/mp4" />
              </video>
            ))}
          </div>
        )}
      </div>
    </div>
  </>
  );
}

export const productLoader = async ({ params }) => {
  const { id } = params;
  
  const routes = {
    "geobasalt-products": () => import("../assets/product-data").then(m => m.basalt_geobasalt),
    "rockfiber": () => import("../assets/product-data").then(m => m.basalt_fiber),
    "basalt-quarry": () => import("../assets/product-data").then(m => m.basalt_quarry),
    "ecobasalt-group": () => import("../assets/product-data").then(m => m.basalt_ecobasalt),
    "goldfiber-pro": () => import("../assets/product-data").then(m => m.basalt_goldfiber),
    "basalt-wool": () => import("../assets/product-data").then(m => m.basalt_wool),
    "basfiber-trade": () => import("../assets/product-data").then(m => m.basalt_trade),
    "qoraqalpoq-basalt-wool": () => import("../assets/product-data").then(m => m.basalt_qqwool),
    "production-of-basalt-continuous-fiber": () => import("../assets/product-data").then(m => m.solFiber),
    "production-of-basalt-continuous-rockwool": () => import("../assets/product-data").then(m => m.solRockwool),
    "production-of-basalt-continuous-pipes": () => import("../assets/product-data").then(m => m.solPipes),
    "production-of-basalt-continuous-chopped-strand": () => import("../assets/product-data").then(m => m.solStrand),
    "production-of-basalt-continuous-reinforcement-bars": () => import("../assets/product-data").then(m => m.solBars),
    "production-of-basalt-continuous-geogrids": () => import("../assets/product-data").then(m => m.solGeogrid),
    "production-of-basalt-continuous-fabric": () => import("../assets/product-data").then(m => m.solFabric),
  }

  if (routes[id]) {
    return routes[id]();
  } else {
    throw data("Page not Found", { status: 404 });
  }
};
