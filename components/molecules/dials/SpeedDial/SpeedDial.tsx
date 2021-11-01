import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
]

export const CustomSpeedDial = () => {
    const [direction, setDirection] =
        React.useState<SpeedDialProps['direction']>('down')
    const onClickAlert = (name: string) => {
        alert(name)
    }
    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Box sx={{ position: 'relative', mt: 0, height: 320 }}>
                <StyledSpeedDial
                    ariaLabel="SpeedDial playground example"
                    icon={<SpeedDialIcon />}
                    direction={direction}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipOpen
                            tooltipTitle={action.name}
                            onClick={() => onClickAlert(action.name)}
                        />
                    ))}
                </StyledSpeedDial>
            </Box>
        </Box>
    )
}
