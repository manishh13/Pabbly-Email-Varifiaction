// import { Typography } from '@mui/material';
// import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

// import { Iconify } from 'src/components/iconify';

// // ----------------------------------------------------------------------

// // const ITEMS = [
// //   {
// //     id: '1',
// //     label: 'Main',
// //     children: [
// //       { id: '2', label: 'Hello' },
// //       {
// //         id: '3',
// //         label: 'Subtree with children',
// //         children: [
// //           { id: '6', label: 'Hello' },
// //           {
// //             id: '7',
// //             label: 'Sub-subtree with children',
// //             children: [
// //               { id: '9', label: 'Child 1' },
// //               { id: '10', label: 'Child 2' },
// //               { id: '11', label: 'Child 3' },
// //             ],
// //           },
// //           { id: '8', label: 'Hello' },
// //         ],
// //       },
// //       { id: '4', label: 'World' },
// //       { id: '5', label: 'Something something' },
// //     ],
// //   },
// // ];

// const ITEMS = [
//   {
//     id: '1',
//     label: 'Home ',
//     value: 0,
//     // children: [
//     //   { id: '2', label: 'Hello' },
//     //   {
//     //     id: '3',
//     //     label: 'Subtree with children',
//     //     children: [
//     //       { id: '6', label: 'Hello' },
//     //       {
//     //         id: '7',
//     //         label: 'Sub-subtree with children',
//     //         children: [
//     //           { id: '9', label: 'Child 1' },
//     //           { id: '10', label: 'Child 2' },
//     //           { id: '11', label: 'Child 3' },
//     //         ],
//     //       },
//     //       { id: '8', label: 'Hello' },
//     //     ],
//     //   },
//     //   { id: '4', label: 'World' },
//     //   { id: '5', label: 'Something something' },
//     // ],
//   },
//   {
//     id: '2',
//     label: 'Pabbly Connect ',
//   },
//   {
//     id: '3',
//     label: 'Pabbly Subscription Billin... ',
//   },
//   {
//     id: '4',
//     label: 'Pabbly Email Marketing',
//   },
//   {
//     id: '5',
//     label: 'Pabbly Form Builder ',
//   },
//   {
//     id: '6',
//     label: 'Pabbly Hook ',
//   },
// ];

// // const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
// //   color: theme.vars.palette.grey[800],
// //   [stylesMode.dark]: { color: theme.vars.palette.grey[200] },
// //   [`& .${treeItemClasses.content}`]: {
// //     borderRadius: theme.spacing(0.5),
// //     padding: theme.spacing(0.5, 1),
// //     margin: theme.spacing(0.2, 0),
// //     [`& .${treeItemClasses.label}`]: { fontSize: '0.8rem', fontWeight: 500 },
// //   },
// //   [`& .${treeItemClasses.iconContainer}`]: {
// //     borderRadius: '50%',
// //     backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.25),
// //     [stylesMode.dark]: {
// //       color: theme.vars.palette.primary.contrastText,
// //       backgroundColor: theme.vars.palette.primary.dark,
// //     },
// //   },
// //   [`& .${treeItemClasses.groupTransition}`]: {
// //     marginLeft: 15,
// //     paddingLeft: 18,
// //     borderLeft: `1px dashed ${varAlpha(theme.vars.palette.text.primaryChannel, 0.4)}`,
// //   },
// // }));

// // ----------------------------------------------------------------------

// export function DashboardFolders() {
//   return (
//     <>
//       <Typography variant="span" fontSize="18px" fontWeight="bold" color="#1c252e">
//         Folders
//       </Typography>
//       <Typography
//         variant="button"
//         color="primary"
//         Icon={<Iconify icon="ph:plus-fill" style={{ width: 18, height: 18 }} />}
//       />

//       <RichTreeView
//         aria-label="customized"
//         defaultExpandedItems={['1']}
//         sx={{ overflowX: 'hidden', minHeight: 240, width: 1 }}
//         // slots={{ item: StyledTreeItem }}
//         items={ITEMS}
//       />
//     </>
//   );
// }

import React, { useState } from 'react';

// import { MoreVert } from '@mui/icons-material/MoreVert';
import {
  Box,
  List,
  Menu,
  Divider,
  Tooltip,
  MenuItem,
  Typography,
  ToggleButton,
  ListItemButton,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

const folders = [
  'Home',
  'Pabbly Connect',
  'Main Folder',
  'Pabbly Subscription Billing',
  'Pabbly Email Marketing',
  'Pabbly Form Builder',
  'Pabbly Hook',
];

const DashboardFolders = () => {
  const [open, setOpen] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleClick = (index) => {
    setOpen(open === index ? null : index);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Tooltip
          title="You can create folders and manage connections within them."
          arrow
          placement="top"
        >
          <Typography variant="h6">Folders</Typography>
        </Tooltip>
        <Tooltip title="Create more folder." arrow placement="top">
          <ToggleButton
            size="large"
            color="primary"
            sx={{
              width: 36,
              height: 36,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            <Iconify icon="qlementine-icons:plus-16" />
          </ToggleButton>
        </Tooltip>
      </Box>
      <Divider />
      <List>
        {folders.map((folder, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <ListItemButton
              onClick={() => handleClick(index)}
              sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}
            >
              <Typography variant="span" sx={{ fontSize: '14px', fontWeight: 500 }}>
                {folder}
                <Typography variant="span" sx={{ color: 'gray', ml: 1 }}>
                  (0)
                </Typography>
              </Typography>
              <Box>
                {folder === 'Home' || folder === 'Trash' ? null : (
                  <Iconify
                    icon="eva:more-vertical-fill"
                    sx={{ width: '16px', height: '16px', color: '#637381' }}
                  />
                )}
              </Box>
            </ListItemButton>
            {/* <IconButton onClick={handleMenuOpen}><MoreVert /></IconButton> */}
          </Box>
        ))}
      </List>
      <Divider />
      <ListItemButton>
        <Typography variant="span" sx={{ fontSize: '14px' }}>
          Trash
          <Typography variant="span" sx={{ color: 'gray', ml: 1 }}>
            (0)
          </Typography>
        </Typography>
      </ListItemButton>

      <Menu>
        <MenuItem onClick={handleMenuClose}>Rename</MenuItem>
        <MenuItem onClick={handleMenuClose}>Share</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default DashboardFolders;
