import React from 'react'
import * as styled from '../styled/Table'

const Table = ({ header, row: rows }) => (
  <styled.Table>
    <styled.TableHeader>
      {Object.values(header).map(({ image: { publicURL }, small, text }, index) => (
        <styled.TableHeaderItem key={index}>
          <styled.TableHeaderItemIcon>
            <img src={publicURL} alt='' />
          </styled.TableHeaderItemIcon>
          <styled.TableHeaderItemText>
            {text}
          </styled.TableHeaderItemText>
          <styled.TableHeaderItemSmall>
            {small}
          </styled.TableHeaderItemSmall>
        </styled.TableHeaderItem>
      ))}
    </styled.TableHeader>
    {rows.map(({ lhs: { item: lhsItems }, rhs: { item: rhsItems }, heading }, index) => (
      <styled.TableRow key={index}>
        {heading && (
          <styled.TableHeading>
            {heading}
          </styled.TableHeading>
        )}
        <styled.TableBody>
          <styled.TableBodyLhs>
            {lhsItems.map(({ text, image: { publicURL }, big }, index) => (
              <styled.TableItem key={index}>
                {!big && (
                  <styled.TableItemIcon>
                    <img src={publicURL} alt='' />
                  </styled.TableItemIcon>
                )}
                <styled.TableItemBig>
                  {big}
                </styled.TableItemBig>
                <styled.TableItemText>
                  {text}
                </styled.TableItemText>
              </styled.TableItem>
            ))}
          </styled.TableBodyLhs>
          <styled.TableBodyRhs>
            {rhsItems.map(({ text, image: { publicURL }, big }, index) => (
              <styled.TableItem key={index}>
                {!big && (
                  <styled.TableItemIcon>
                    <img src={publicURL} alt='' />
                  </styled.TableItemIcon>
                )}
                <styled.TableItemBig>
                  {big}
                </styled.TableItemBig>
                <styled.TableItemText>
                  {text}
                </styled.TableItemText>
              </styled.TableItem>
            ))}
          </styled.TableBodyRhs>
        </styled.TableBody>
      </styled.TableRow>
    ))}
  </styled.Table>
)

export default Table
