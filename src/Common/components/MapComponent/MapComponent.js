// import React, { useState } from 'react'
// //import ReactMapboxGl, { Layer, Feature, Source } from 'react-mapbox-gl'
// import { observer } from 'mobx-react'
// import bbox from '@turf/bbox'
// import DeckGL from '@deck.gl/react'
// import { GeoJsonLayer } from '@deck.gl/layers'
// import { LineLayer } from '@deck.gl/layers'

// import stateBoundaries from '../../../Covid19DashBoard/fixtures/StateBoundaries.json'

// const coordinates = bbox(stateBoundaries)

// const Map = ReactMapboxGl({
//    accessToken:
//       'pk.eyJ1IjoiY3Vnb3MiLCJhIjoiY2p4Nm43MzA3MDFmZDQwcGxsMjB4Z3hnNiJ9.SQbnMASwdqZe6G4n6OMvVw'
// })

// const initialViewState = {
//    longitude: -122.41669,
//    latitude: 37.7853,
//    zoom: 13,
//    pitch: 0,
//    bearing: 0
// }

// class MapComponent extends React.Component {
//    render() {
//       const layers = [new LineLayer({ id: 'line-layer', stateBoundaries })]
//       return (
//          <Map
//             style='mapbox://styles/mapbox/streets-v9'
//             containerStyle={{
//                height: '70vh',
//                width: '100%',
//                zoom: 1
//             }}
//             fitBounds={[
//                [coordinates[0], coordinates[1]],
//                [coordinates[2], coordinates[3]]
//             ]}
//          >
//             <DeckGL
//                data={stateBoundaries}
//                controller={true}
//                layers={layers}
//                id='AP'
//                type='fill'
//                fillPaint={{
//                   'fill-color': 'orange',
//                   'line-width': 2
//                }}
//                initialViewState={initialViewState}
//             />
//          </Map>
//       )
//    }
// }

// export default MapComponent
