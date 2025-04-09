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

export function TimeZoneCard({ currentProduct, Title = 'Save' }) {
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
    <Card>
      <CardHeader title="Time Zone" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        {/* <Field.Text name="timezone" type="zone" label="Select Time Zone" /> */}
        <Field.CountrySelect fullWidth name="Select Time Zone" label="Select Time Zone" />

        <Typography variant="span" sx={{ color: 'text.secondary', fontSize: '12px' }}>
          Select the time zone that matches your current location.
          <LearnMoreTypography sx={{ fontSize: '12px' }} />
        </Typography>

        <Box>
          <Button variant="contained" color="primary">
            {Title}
          </Button>
        </Box>
      </Stack>
    </Card>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {renderDetails}
    </Form>
  );
}
