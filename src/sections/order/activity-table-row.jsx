import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

import { useBoolean } from 'src/hooks/use-boolean';

import { fDateTime } from 'src/utils/format-time';

// import { fCurrency } from 'src/utils/format-number';

import { Typography } from '@mui/material';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
// import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export function ActivityTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
  buttonTitle,
  verificationStatus,
  toolTitle,
  ellipsisTooltipTitle,
}) {
  const confirm = useBoolean();

  const collapse = useBoolean();

  const popover = usePopover();

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onClick={onSelectRow}
          inputProps={{ id: `row-checkbox-${row.id}`, 'aria-label': `Row checkbox` }}
        />
      </TableCell>

      <TableCell>
        <Label
          variant="soft"
          color={
            (verificationStatus === 'Created' && 'success') ||
            (verificationStatus === 'Updated' && 'warning') ||
            (verificationStatus === 'Delete' && 'error') ||
            'default'
          }
        >
          {verificationStatus}
        </Label>

        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          {fDateTime(row.createdAt)}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography varirent="span" sx={{ fontSize: '14px', fontWeight: 'normal' }}>
          Hardik Pradhan
        </Typography>
        <Typography
          varirent="span"
          sx={{ fontSize: '14px', fontWeight: 'normal', color: 'text.disabled' }}
        >
          hardik.pradhan@pabbly.com
        </Typography>
      </TableCell>
      <TableCell>
        <Typography varirent="span" sx={{ fontSize: '14px', fontWeight: 'normal' }}>
          Dashboard
        </Typography>
        <Typography
          varirent="span"
          sx={{ fontSize: '14px', fontWeight: 'normal', color: 'text.disabled' }}
        >
          USER
        </Typography>
      </TableCell>

      <TableCell sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <Typography varirent="span" color="primary" sx={{ fontSize: '14px', fontWeight: 'normal' }}>
          67764b1fb9e6371d99c28a37
        </Typography>
      </TableCell>
    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      <TableCell sx={{ p: 0, border: 'none' }} colSpan={8}>
        <Collapse
          in={collapse.value}
          timeout="auto"
          unmountOnExit
          sx={{ bgcolor: 'background.neutral' }}
        >
          <Paper sx={{ m: 1.5 }}>
            {row.items.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                alignItems="center"
                sx={{
                  p: (theme) => theme.spacing(1.5, 2, 1.5, 1.5),
                  '&:not(:last-of-type)': {
                    borderBottom: (theme) => `solid 2px ${theme.vars.palette.background.neutral}`,
                  },
                }}
              >
                <Avatar
                  src={item.coverUrl}
                  variant="rounded"
                  sx={{ width: 48, height: 48, mr: 2 }}
                />

                <ListItemText
                  primary={item.name}
                  secondary={item.sku}
                  primaryTypographyProps={{ typography: 'body2' }}
                  secondaryTypographyProps={{
                    component: 'span',
                    color: 'text.disabled',
                    mt: 0.5,
                  }}
                />

                <div>x{item.quantity} </div>

                {/* <Box sx={{ width: 110, textAlign: 'right' }}>{fCurrency(item.price)}</Box> */}
              </Stack>
            ))}
          </Paper>
        </Collapse>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      {renderSecondary}

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
          >
            <Iconify icon="fluent:folder-move-16-filled" />
            Move to folder
          </MenuItem>

          <MenuItem
            onClick={() => {
              onViewRow();
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
