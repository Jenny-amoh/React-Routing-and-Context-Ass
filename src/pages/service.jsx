import { useLocation, useParams } from "react-router-dom"
import servicesData from "../components/data"
import Card from "../components/card"

function Service() {
    const Param = useParams()
    const location = useLocation()
    const item = location.state


    return (
        <div>
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
                    <p>
                        {item.description}
                    </p>

                    <p>
                        #{item.id}
                    </p>
                </div>

                <br />

            </div>
            <div>
                <h3>Other Services</h3>
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