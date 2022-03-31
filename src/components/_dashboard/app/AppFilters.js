import { Stack, Typography, } from '@mui/material';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { FilterSidebar } from '.';

export default function AppFilters() {
    const [openFilter, setOpenFilter] = useState(false);

    const formik = useFormik({
        initialValues: {
            start: '',
            end: ''
        },
        onSubmit: () => {
            setOpenFilter(false);
        }
    });

    const { resetForm, handleSubmit } = formik;

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const handleResetFilter = () => {
        handleSubmit();
        resetForm();
    };
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={12} mb={3}>
            <Typography variant="h3" gutterBottom>
                Visualización de denuncias laborales en Twitter
            </Typography>
            <FilterSidebar
                formik={formik}
                isOpenFilter={openFilter}
                onResetFilter={handleResetFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
            />
            {/* <TextField
            id="date"
            label="Inicio"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="date"
            label="Fin"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
                shrink: true,
            }}
        /> */}

        </Stack>

    );


}
