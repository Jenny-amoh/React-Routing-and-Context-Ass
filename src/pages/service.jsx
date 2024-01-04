import { useLocation, useParams } from "react-router-dom"
import servicesData from "../components/data"
import Card from "../components/card"

function Service() {
    const Param = useParams()
    const location = useLocation()
    const item = location.state


    return (
        <div>
            <div>
                <h2 className="serviceHeader">Welcome to our Tech Service Solutions</h2>
                <p className="serviceText"> With our expertise and passion for technology, we are committed 
                    to helping your business thrive in today's competitive landscape.</p>
            </div>
            <div className="servicePage">
                <div>
                    <p>
                        <img className="pic" src={item.image} alt="" />
                    </p>
                </div>

                <div>
                    <h2>
                        {item.name}
                    </h2>
                    <p className="serviceTitle">
                        {item.title}
                    </p>
                    <p className="serviceDescription">
                        {item.description}
                    </p>
                </div>

                <br />

            </div>
            <div>
                <h3 className="title">Explore Other Services</h3>
                <div className="service-container">
                    {
                        servicesData.map((service, index) => {
                            return (
                                <Card item={service} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Service