import Card from "../components/card"
import servicesData from "../components/data"

function Services() {

    return (
        <div>
            services 
            <div className="service-container">
                {
                    servicesData.map((service, index) => {
                        return (
                            <Card item={service}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Services