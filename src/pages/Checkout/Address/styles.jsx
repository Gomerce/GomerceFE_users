import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const Wrapper = styled(Box)(({ theme }) => ({

}))

export const Group = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '2% 0',
  height: 'auto',
  width: '100%'
}))

export const InputGroup = styled(Box)(({ theme }) => ({
  width: '500px',
  [theme.breakpoints.down('tablet_600')]: {
    width: '100%'
  }
}))
