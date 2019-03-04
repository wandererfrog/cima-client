import React from 'react'
import {Parallax} from 'react-parallax'

import './Cima.css'

import AnimatedBtn from '../UIComponents/AnimatedBtn/AnimatedBtn'
import FeatureEntry from './FeatureEntry/FeatureEntry'


const features = [
  {icon : "bar-chart-2" , title : "Visualize as cotas" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
  {icon : "activity" , title : "Consulte os preços" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
  {icon : "database" , title : "Dados tratados" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
  {icon : "clock" , title : "Salva tempo" , text : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
]

const who = [
  { photo : ""}
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
          <div className="cima-section cima-section-mt">
            <img alt="" className="cima-section-logo" src={require("../../assets/cima-logo.png")}/>
            <div className="cima-title">CIMA</div>
            <div className="cima-subtitle">{"Centro de Informação dos Mercados Agricolas".toUpperCase()}</div>
            <AnimatedBtn title="search" className="cima-section-button" icon="fas fa-angle-double-right" />
          </div>
        </Parallax>
        <div className="features-container">
          <div className="row">
            <div className="container">
              <div className="features-title">FEATURES:</div>
              <div className="features-subtitle">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>
              {
                features.map((f)=>{
                  return <FeatureEntry icon={f.icon} title={f.title} text={f.text} />
                })
              }
            </div>
          </div>
        </div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../assets/bg2.jpeg')}
            bgImageAlt="colors"
            strength={400}
        >
          <div className="cima-section">
            <div className="cima-subtitle">{"WORK BETTER WITH BETTER DATA".toUpperCase()}</div>
            <AnimatedBtn title="prove" className="cima-section-button" icon="fas fa-angle-double-right" />
          </div>
        </Parallax>
        <div className="who-container">
          <div className="row">
            <div className="container">
              <div className="features-title">WHO WE ARE:</div>
              <div className="features-subtitle">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>
              {
                who.map((w)=>{
                  // return <Who who={w} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
