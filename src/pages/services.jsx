import Card from "../components/card"
import servicesData from "../components/data"

function Services() {

    return (
        <div>
            <div>
                <h2 className="servicesHeader">Explore Our Services</h2>
                <p className="servicesText">We are a leading provider of comprehensive tech solutions designed to empower businesses in the digital age. 
                    Our team of experts specializes in delivering exceptional services across these various domains,</p>
            </div>
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