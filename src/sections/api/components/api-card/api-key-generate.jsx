import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import { Box, Button, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { PRODUCT_CATEGORY_GROUP_OPTIONS } from 'src/_mock';

// import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';
import LearnMoreTypography from 'src/components/learn-more/learn-more';

import BigCard from 'src/sections/dashboard/components/big-card/big-card';
import { listItemes } from 'src/sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const { items, style } = listItemes;

const imgPath =
  '../../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';

// ----------------------------------------------------------------------

export const NewProductSchema = zod.object({
  name: zod.string().min(1, { message: 'Name is required!' }),
  //   description: schemaHelper.editor({ message: { required_error: 'Description is required!' } }),
  //   images: schemaHelper.files({ message: { required_error: 'Images is required!' } }),
  code: zod.string().min(1, { message: 'Product code is required!' }),
  sku: zod.string().min(1, { message: 'Product sku is required!' }),
  quantity: zod.number().min(1, { message: 'Quantity is required!' }),
  colors: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  sizes: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  tags: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
  gender: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
  price: zod.number().min(1, { message: 'Price should not be $0.00' }),
  // Not required
  category: zod.string(),
  priceSale: zod.number(),
  subDescription: zod.string(),
  taxes: zod.number(),
  saleLabel: zod.object({ enabled: zod.boolean(), content: zod.string() }),
  newLabel: zod.object({ enabled: zod.boolean(), content: zod.string() }),
});

// ----------------------------------------------------------------------

export function APIKeyGenerate({ currentProduct, Title = 'Generate API Keys' }) {
  const router = useRouter();

  const [includeTaxes, setIncludeTaxes] = useState(false);

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      description: currentProduct?.description || '',
      subDescription: currentProduct?.subDescription || '',
      images: currentProduct?.images || [],
      //
      code: currentProduct?.code || '',
      sku: currentProduct?.sku || '',
      price: currentProduct?.price || 0,
      quantity: currentProduct?.quantity || 0,
      priceSale: currentProduct?.priceSale || 0,
      tags: currentProduct?.tags || [],
      taxes: currentProduct?.taxes || 0,
      gender: currentProduct?.gender || [],
      category: currentProduct?.category || PRODUCT_CATEGORY_GROUP_OPTIONS[0].classify[1],
      colors: currentProduct?.colors || [],
      sizes: currentProduct?.sizes || [],
      newLabel: currentProduct?.newLabel || { enabled: false, content: '' },
      saleLabel: currentProduct?.saleLabel || { enabled: false, content: '' },
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: zodResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  useEffect(() => {
    if (includeTaxes) {
      setValue('taxes', 0);
    } else {
      setValue('taxes', currentProduct?.taxes || 0);
    }
  }, [currentProduct?.taxes, includeTaxes, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      //   toast.success(currentProduct ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.product.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleRemoveFile = useCallback(
    (inputFile) => {
      const filtered = values.images && values.images?.filter((file) => file !== inputFile);
      setValue('images', filtered);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('images', [], { shouldValidate: true });
  }, [setValue]);

  const handleChangeIncludeTaxes = useCallback((event) => {
    setIncludeTaxes(event.target.checked);
  }, []);

  const renderDetails = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <BigCard
        Items={items}
        style={style}
        buttontitle="Verify Email"
        visibility="none"
        img={imgPath}
        buttonVisibility="none"
        bigcardtitle="Points To Remember"
        secondaryTextVisibility="none"
      />

      <Card>
        <CardHeader title="API" sx={{ mb: 3 }} />

        <Divider />

        <Stack spacing={3} sx={{ p: 3 }}>
          <Field.Text
            name="APIKey"
            type="password"
            label="API Key"
            value="0000000000000000000000000000000"
          />
          <Typography variant="span" sx={{ color: 'text.secondary', fontSize: '12px' }}>
            Use the Copy button to securely copy it. Keep it private and dont share with others.
            <LearnMoreTypography sx={{ ml: '2px', fontSize: '12px' }} />
          </Typography>
          <Field.Text
            name="SecretKey"
            type="password"
            label="Secret Key"
            value="0000000000000000000000000000000"
          />
          <Typography variant="span" sx={{ color: 'text.secondary', fontSize: '12px' }}>
            Use the Copy button to securely copy it. Keep it private and dont share with others.
            <LearnMoreTypography sx={{ ml: '2px', fontSize: '12px' }} />
          </Typography>
          <Box>
            <Button variant="contained" color="primary">
              {Title}
            </Button>
          </Box>
        </Stack>
      </Card>
    </Box>
  );

  //   const renderProperties = (
  //     <Card>
  //       <CardHeader
  //         title="Properties"
  //         subheader="Additional functions and attributes..."
  //         sx={{ mb: 3 }}
  //       />

  //       <Divider />

  //       <Stack spacing={3} sx={{ p: 3 }}>
  //         <Box
  //           columnGap={2}
  //           rowGap={3}
  //           display="grid"
  //           gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
  //         >
  //           <Field.Text name="code" label="Product code" />

  //           <Field.Text name="sku" label="Product SKU" />

  //           <Field.Text
  //             name="quantity"
  //             label="Quantity"
  //             placeholder="0"
  //             type="number"
  //             InputLabelProps={{ shrink: true }}
  //           />

  //           <Field.Select native name="category" label="Category" InputLabelProps={{ shrink: true }}>
  //             {PRODUCT_CATEGORY_GROUP_OPTIONS.map((category) => (
  //               <optgroup key={category.group} label={category.group}>
  //                 {category.classify.map((classify) => (
  //                   <option key={classify} value={classify}>
  //                     {classify}
  //                   </option>
  //                 ))}
  //               </optgroup>
  //             ))}
  //           </Field.Select>

  //           <Field.MultiSelect
  //             checkbox
  //             name="colors"
  //             label="Colors"
  //             options={PRODUCT_COLOR_NAME_OPTIONS}
  //           />

  //           <Field.MultiSelect checkbox name="sizes" label="Sizes" options={PRODUCT_SIZE_OPTIONS} />
  //         </Box>

  //         <Field.Autocomplete
  //           name="tags"
  //           label="Tags"
  //           placeholder="+ Tags"
  //           multiple
  //           freeSolo
  //           disableCloseOnSelect
  //           options={_tags.map((option) => option)}
  //           getOptionLabel={(option) => option}
  //           renderOption={(props, option) => (
  //             <li {...props} key={option}>
  //               {option}
  //             </li>
  //           )}
  //           renderTags={(selected, getTagProps) =>
  //             selected.map((option, index) => (
  //               <Chip
  //                 {...getTagProps({ index })}
  //                 key={option}
  //                 label={option}
  //                 size="small"
  //                 color="info"
  //                 variant="soft"
  //               />
  //             ))
  //           }
  //         />

  //         <Stack spacing={1}>
  //           <Typography variant="subtitle2">Gender</Typography>
  //           <Field.MultiCheckbox row name="gender" options={PRODUCT_GENDER_OPTIONS} sx={{ gap: 2 }} />
  //         </Stack>

  //         <Divider sx={{ borderStyle: 'dashed' }} />

  //         <Stack direction="row" alignItems="center" spacing={3}>
  //           <Field.Switch name="saleLabel.enabled" label={null} sx={{ m: 0 }} />
  //           <Field.Text
  //             name="saleLabel.content"
  //             label="Sale label"
  //             fullWidth
  //             disabled={!values.saleLabel.enabled}
  //           />
  //         </Stack>

  //         <Stack direction="row" alignItems="center" spacing={3}>
  //           <Field.Switch name="newLabel.enabled" label={null} sx={{ m: 0 }} />
  //           <Field.Text
  //             name="newLabel.content"
  //             label="New label"
  //             fullWidth
  //             disabled={!values.newLabel.enabled}
  //           />
  //         </Stack>
  //       </Stack>
  //     </Card>
  //   );

  //   const renderPricing = (
  //     <Card>
  //       <CardHeader title="Pricing" subheader="Price related inputs" sx={{ mb: 3 }} />

  //       <Divider />

  //       <Stack spacing={3} sx={{ p: 3 }}>
  //         <Field.Text
  //           name="price"
  //           label="Regular price"
  //           placeholder="0.00"
  //           type="number"
  //           InputLabelProps={{ shrink: true }}
  //           InputProps={{
  //             startAdornment: (
  //               <InputAdornment position="start">
  //                 <Box component="span" sx={{ color: 'text.disabled' }}>
  //                   $
  //                 </Box>
  //               </InputAdornment>
  //             ),
  //           }}
  //         />

  //         <Field.Text
  //           name="priceSale"
  //           label="Sale price"
  //           placeholder="0.00"
  //           type="number"
  //           InputLabelProps={{ shrink: true }}
  //           InputProps={{
  //             startAdornment: (
  //               <InputAdornment position="start">
  //                 <Box component="span" sx={{ color: 'text.disabled' }}>
  //                   $
  //                 </Box>
  //               </InputAdornment>
  //             ),
  //           }}
  //         />

  //         <FormControlLabel
  //           control={
  //             <Switch id="toggle-taxes" checked={includeTaxes} onChange={handleChangeIncludeTaxes} />
  //           }
  //           label="Price includes taxes"
  //         />

  //         {!includeTaxes && (
  //           <Field.Text
  //             name="taxes"
  //             label="Tax (%)"
  //             placeholder="0.00"
  //             type="number"
  //             InputLabelProps={{ shrink: true }}
  //             InputProps={{
  //               startAdornment: (
  //                 <InputAdornment position="start">
  //                   <Box component="span" sx={{ color: 'text.disabled' }}>
  //                     %
  //                   </Box>
  //                 </InputAdornment>
  //               ),
  //             }}
  //           />
  //         )}
  //       </Stack>
  //     </Card>
  //   );

  //   const renderActions = (
  //     <Stack spacing={3} direction="row" alignItems="center" flexWrap="wrap">
  //       <FormControlLabel
  //         control={<Switch defaultChecked inputProps={{ id: 'publish-switch' }} />}
  //         label="Publish"
  //         sx={{ pl: 3, flexGrow: 1 }}
  //       />

  //       <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
  //         {!currentProduct ? 'Create product' : 'Save changes'}
  //       </LoadingButton>
  //     </Stack>
  //   );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {renderDetails}
    </Form>
  );
}
