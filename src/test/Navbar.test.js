import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar Component', () =>{
    test('Titulo se encuentra en el documento', ()=>{
        render(<Navbar/>)
    })
})