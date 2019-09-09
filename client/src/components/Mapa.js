
import { connect } from 'react-redux'
import React, { createRef, Component } from 'react'
import L from 'leaflet'
import {
    Circle,
    CircleMarker,
    Map,
    Marker,
    Polygon,
    Popup,
    Rectangle,
    TileLayer,
    Tooltip,
} from 'react-leaflet'
const center = [4.620943145474099, -74.07446100531007]



const rectangle = [[51.49, -0.08], [51.5, -0.06]]

export class Mapa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasLocation: false,
            latlng: {
                lat: 4.650010884129616,
                lng: -74.10284221172334,
            },
            clicked: 0,
            draggable: true,
            pointStack: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLocationFound = this.handleLocationFound.bind(this);
    }
    onClickCircle = () => {
        this.setState({ clicked: this.state.clicked + 1 })
    }

    handleClick = (e) => {
        const obj = this.state.pointStack;
        obj.push(e.latlng);
        this.setState({ pointStack: obj });

        this.props.addCoordenates(obj)
    }

    handleLocationFound(e) {

        console.log(e + "handleLocationFound")
        this.setState({
            hasLocation: true,
            latlng: e.latlng,
        })
    }
    componentDidMount() {
    }
    render() {
        const multiPolygon = [
            [
                [4.6213409692696485, -74.09591674804689], 
                [4.626046294262076, -74.07926559448244], 
                [4.650010884129616, -74.10284221172334]
            ],
        ]
        const clickedText =
            this.state.clicked === 0
                ? 'Click this Circle to change the Tooltip text'
                : `Circle click: ${this.state.clicked}`
        
        const marketList = this.props.coordenates.list.map((marker, key) => {
            return (
                <Marker position={marker}>
                    <Popup>You are ajsjahse</Popup>
                </Marker>
            )
        })
        const marketListNew = this.props.coordenates.listNew.map((marker, key) => {
            const newIcon = new L.Icon({
                iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFk%0D%0Ab2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246%0D%0AIDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMCAzMCIgc3R5%0D%0AbGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAgMzA7IiB4bWw6c3BhY2U9InByZXNlcnZl%0D%0AIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkYwMEZGO30KCS5zdDF7Zmls%0D%0AbDojNDU0NTQ1O30KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS1taXRlcmxp%0D%0AbWl0OjEwO30KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7%0D%0Ac3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9%0D%0AIk0xNS4zLDI5LjVDMTMuOSwyOCw1LjYsMTguMiw1LjYsOS42YzAtNSw0LjUtOS40LDkuNy05LjRT%0D%0AMjUsNC42LDI1LDkuNkMyNC45LDE3LjksMTYuNiwyNy45LDE1LjMsMjkuNXoiLz4KCTxwYXRoIGNs%0D%0AYXNzPSJzdDEiIGQ9Ik0xNS4zLDAuNGM1LDAsOS40LDQuMyw5LjQsOS4yYzAsOC03LjYsMTcuNC05%0D%0ALjQsMTkuNkMxMy41LDI3LDUuOSwxNy43LDUuOSw5LjVDNS45LDQuNywxMC4zLDAuNCwxNS4zLDAu%0D%0ANAoJCSBNMTUuMy0wLjFjLTUuNSwwLTkuOSw0LjctOS45LDkuN2MwLDkuNSw5LjksMjAuMyw5Ljks%0D%0AMjAuM3M5LjktMTEuMSw5LjktMjAuM0MyNS4yLDQuNSwyMC44LTAuMSwxNS4zLTAuMUwxNS4zLTAu%0D%0AMXoiLz4KPC9nPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjAuMSwxMy43SDExYy0wLjYsMC0xLTAu%0D%0ANC0xLTFWNy4xYzAtMC41LDAuNC0xLDEtMWg5LjFjMC41LDAsMSwwLjUsMSwxdjUuNkMyMS4xLDEz%0D%0ALjIsMjAuNiwxMy43LDIwLjEsMTMuN3oiCgkvPgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTguNiwx%0D%0AMy42aC02LjJjLTAuNCwwLTAuNy0wLjQtMC43LTFWN2MwLTAuNSwwLjMtMSwwLjctMWg2LjJjMC4z%0D%0ALDAsMC43LDAuNSwwLjcsMXY1LjYKCUMxOS4zLDEzLjEsMTksMTMuNiwxOC42LDEzLjZ6Ii8+Cjxw%0D%0AYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMy45LDUuOEwxMy45LDUuOGMwLTEuMSwwLjQtMS45LDAuOS0x%0D%0ALjloMS41YzAuNSwwLDAuOSwwLjksMC45LDEuOWwwLDAiLz4KPC9zdmc+Cg==',
                iconRetinaUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFk%0D%0Ab2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246%0D%0AIDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMCAzMCIgc3R5%0D%0AbGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAgMzA7IiB4bWw6c3BhY2U9InByZXNlcnZl%0D%0AIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkYwMEZGO30KCS5zdDF7Zmls%0D%0AbDojNDU0NTQ1O30KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS1taXRlcmxp%0D%0AbWl0OjEwO30KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7%0D%0Ac3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9%0D%0AIk0xNS4zLDI5LjVDMTMuOSwyOCw1LjYsMTguMiw1LjYsOS42YzAtNSw0LjUtOS40LDkuNy05LjRT%0D%0AMjUsNC42LDI1LDkuNkMyNC45LDE3LjksMTYuNiwyNy45LDE1LjMsMjkuNXoiLz4KCTxwYXRoIGNs%0D%0AYXNzPSJzdDEiIGQ9Ik0xNS4zLDAuNGM1LDAsOS40LDQuMyw5LjQsOS4yYzAsOC03LjYsMTcuNC05%0D%0ALjQsMTkuNkMxMy41LDI3LDUuOSwxNy43LDUuOSw5LjVDNS45LDQuNywxMC4zLDAuNCwxNS4zLDAu%0D%0ANAoJCSBNMTUuMy0wLjFjLTUuNSwwLTkuOSw0LjctOS45LDkuN2MwLDkuNSw5LjksMjAuMyw5Ljks%0D%0AMjAuM3M5LjktMTEuMSw5LjktMjAuM0MyNS4yLDQuNSwyMC44LTAuMSwxNS4zLTAuMUwxNS4zLTAu%0D%0AMXoiLz4KPC9nPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjAuMSwxMy43SDExYy0wLjYsMC0xLTAu%0D%0ANC0xLTFWNy4xYzAtMC41LDAuNC0xLDEtMWg5LjFjMC41LDAsMSwwLjUsMSwxdjUuNkMyMS4xLDEz%0D%0ALjIsMjAuNiwxMy43LDIwLjEsMTMuN3oiCgkvPgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTguNiwx%0D%0AMy42aC02LjJjLTAuNCwwLTAuNy0wLjQtMC43LTFWN2MwLTAuNSwwLjMtMSwwLjctMWg2LjJjMC4z%0D%0ALDAsMC43LDAuNSwwLjcsMXY1LjYKCUMxOS4zLDEzLjEsMTksMTMuNiwxOC42LDEzLjZ6Ii8+Cjxw%0D%0AYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMy45LDUuOEwxMy45LDUuOGMwLTEuMSwwLjQtMS45LDAuOS0x%0D%0ALjloMS41YzAuNSwwLDAuOSwwLjksMC45LDEuOWwwLDAiLz4KPC9zdmc+Cg==',
                iconAnchor: [20, 40],
                popupAnchor: [0, -35],
                iconSize: [40, 40],
                shadowUrl: '../../marker-shadow.png',
                shadowSize: [29, 40],
                shadowAnchor: [7, 40],
            })
            return (
                <Marker position={marker} icon={newIcon} >
                    <Popup>You are ajsjahse</Popup>
                </Marker>
            )
        })
        return (
            <div >
                <Map center={center} zoom={14}
                    onClick={this.handleClick}

                    draggable={this.state.draggable}
                    onLocationfound={this.handleLocationFound}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {marketListNew}
                    <Circle
                        center={center}
                        fillColor="blue"
                        onClick={this.onClickCircle}
                        radius={200}>
                        <Tooltip>{clickedText}</Tooltip>
                    </Circle>
                    <CircleMarker center={[51.51, -0.12]} color="red" radius={20}>
                        <Tooltip>Tooltip for CircleMarker</Tooltip>
                    </CircleMarker>
                    <Marker position={this.state.latlng}>
                        <Popup>Popup for Marker</Popup>
                        <Tooltip>Tooltip for Marker</Tooltip>
                    </Marker>
                    {marketList}
                    <Polygon color="purple" positions={multiPolygon}>
                        <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
                    </Polygon>
                    <Rectangle bounds={rectangle} color="black">
                        <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
                            permanent Tooltip for Rectangle
                        </Tooltip>
                    </Rectangle>
                </Map>
                 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    coordenates: state.coordenates,
    coordenatesNew: state.coordenatesNew
})

const mapDispatchToProps = dispatch=>({
    addCoordenates:(coordenate)=>{
        dispatch({
            type:'ADD_COORDENATESNEW',
            coordenate
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Mapa)
