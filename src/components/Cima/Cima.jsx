import React from 'react'
import {Parallax} from 'react-parallax'

import './Cima.css'

import feather from 'feather-icons';

import AnimatedBtn from '../UIComponents/AnimatedBtn/AnimatedBtn'
import FeatureEntry from './FeatureEntry/FeatureEntry'

const features = [
  {icon : feather.icons['bar-chart-2'] , title : "Visualize as cotas" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
  {icon : feather.icons['bar-chart-2'].toString() , title : "Consulte os preços" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
  {icon : feather.icons['bar-chart-2'].toString() , title : "Dados tratados" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
  {icon : feather.icons['bar-chart-2'].toString() , title : "Salva tempo" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
]

export default class Cima extends React.Component{
  render(){
    return (
      <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../assets/bg1.jpeg')}
            bgImageAlt="thecow"
            strength={400}
        >
          <div className="cima-section">
            <img alt="" className="cima-section-logo" src={require("../../assets/cima-logo.png")}/>
            <div className="cima-title">CIMA</div>
            <div className="cima-subtitle">{"Centro de Informação dos Mercados Agricolas".toUpperCase()}</div>
            <AnimatedBtn title="search" className="cima-section-button" icon="fas fa-angle-double-right" />
          </div>
        </Parallax>
        <div className="features-container">
          <div className="row">
            {
              features.map((f)=>{
                return <FeatureEntry icon={f.icon} title={f.title} text={f.text} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
