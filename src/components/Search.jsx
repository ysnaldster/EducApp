import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { searchContentWithFilter, startSearch } from "../actions/content.jsx";
import styled from "styled-components";

const SearchMore = styled.input`
  background-color: #f7a440;
  height: 45;
  border-radius: 1.5rem;
  line-height: 2rem;
  color: white;
  float: right;
  width:40%;
  ::placeholder{
    color:black;
  }
  &:hover {
    color: black;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;


const Search = () => {
    const dispatch = useDispatch()

    const result = useSelector(state => state.content)
    console.log(result.search);

    const [filter, setFilter] = useState('')

    const handleDataSearch = (e) => {
        e.preventDefault()
        dispatch(startSearch(filter.toLowerCase()))
    }


    const validar = (e) => {
        e.preventDefault()
        if (e.which == 13) {
            dispatch(searchContentWithFilter(e.target.value));
        }
    }


    return (
        <div>
            <form onSubmit={handleDataSearch}>
                <SearchMore className="btn fw-bolder" type="search" placeholder="Buscar Más Temas" name="buscar" onKeyUp={validar} onChange={(e) => {
                    setFilter(e.target.value);
                }} />

            </form>

            <div>
                {
                    result.search?.length >= 1 ? (
                        result.search.map((item) => (
                            <div>
                                <p>
                                    {item.tipo}
                                </p>
                                <p>
                                    {item.titulo}
                                </p>
                            </div>
                        ))     
                    ): <p>No se han realizado busquedas</p>
                }

            </div>
        </div>
    )
}

export default Search
