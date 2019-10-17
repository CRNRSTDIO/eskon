import styled from 'styled-components'

export const Table = styled.div`
  margin: 3.125rem 0;
`

export const TableHeader = styled.div`
  background-color: ${({ theme: { grey0 } }) => grey0};
  display: flex;
  justify-content: center;
  padding: 3.25rem 0 0;
`

export const TableHeaderItemSmall = styled.div`
  font-family: 'Roboto';
  font-size: .9375rem;
  margin: 1.125rem 0 .9375rem;
`

export const TableHeaderItem = styled.div`
  border-bottom: ${({ theme: { grey1 } }) => `.1875rem solid ${grey1}`};
  color: ${({ theme: { grey6 } }) => grey6};
  font-family: 'Noway';
  flex-basis: 50%;
  max-width: 50%;
  text-align: center;

  ${TableHeaderItemSmall} {
    color: ${({ theme: { grey4 } }) => grey4};
  }
  & + & {
    border-bottom: ${({ theme: { blue2 } }) => `.1875rem solid ${blue2}`};
    color: ${({ theme: { blue2 } }) => blue2};

    ${TableHeaderItemSmall} {
      color: ${({ theme: { dark2 } }) => dark2};
    }
  }
`

export const TableHeaderItemIcon = styled.div`

  img {
    height: 3.125rem;
    max-width: 4.25rem;
  }
`

export const TableHeaderItemText = styled.div`

`

export const TableRow = styled.div`
`

export const TableHeading = styled.div`
  background-color: ${({ theme: { grey0 } }) => grey0};
  color: ${({ theme: { grey4 } }) => grey4};
  font-family: 'Roboto';
  font-size: .9375rem;
  padding: 1.125rem 0;
  text-align: center;
`

export const TableBody = styled.div`
  display: flex;
  padding: 1rem 0;
`

export const TableBodyLhs = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  text-align: center;
`

export const TableBodyRhs = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  text-align: center;
`

export const TableItem = styled.div`
  margin: 2.25rem 0;
`

export const TableItemIcon = styled.div`

  img {
    height: 3.125rem;
    max-width: 4.25rem;
  }
`

export const TableItemBig = styled.div`
  color: ${({ theme: { blue2 } }) => blue2};
  font-family: 'Noway';
  font-size: 1.875rem;
  font-weight: 300;
`

export const TableItemText = styled.div`
  color: ${({ theme: { grey4 } }) => grey4};
  font-family: 'Roboto';
  font-size: .8125rem;
  margin: 1rem 0 0;
  text-transform: uppercase;
`
