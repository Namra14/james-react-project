import { useState } from 'react'
import Navbar from './Navbar'
import Seperate from './seperate'
import data from './data'
import './App.css';

export default function App(){
    const journal = data.map(item => {
        return (
            <Seperate 
                key={item.id}
                {...item}
            />
        )
    })
    
    
    
    
    
    return(
        <section>
            <Navbar />
            {journal}
        </section>
        
        
    )
}
