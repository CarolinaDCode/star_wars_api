import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar Component', () =>{
    test('Debe de retornar un string', ()=>{
        const result = Navbar('People');
        expect(typeof(result)).toBe('string');
    })
})