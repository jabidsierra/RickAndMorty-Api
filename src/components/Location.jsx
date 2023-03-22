
const Location = ({locationData}) => {
    return (
        <div className="location-card">

            <ul class="location-card-items">
                <li class="location_items" >
                    <h3 class="items__title">
                         Nombre
                    </h3>
                    <span>
                         {locationData.name}
                    </span>
                </li>
                <li class="location_items">
                    <h3 class="items__title">
                        Tipo
                    </h3>
                    <span>
                        {locationData.type}
                    </span>
                </li>
                <li class="location_items">
                    <h3 class="items__title">
                        Dimensión
                    </h3>
                    <span>
                        {locationData.dimension}
                    </span>
                </li>
                <li class="location_items">
                    <h3 class="items__title">
                        Población
                    </h3>
                    <span>
                        {locationData.residents?.length}
                    </span>
                </li>
            </ul>
                
        </div>
    );
};

export default Location;