import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import img6 from '../image/background4.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const api = "https://to-dos-api.softclub.tj/api/to-dos";

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
 
});

const CaseStudies = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  async function GetData() {
    try {
      const res = await axios.get(api);
      setData(res.data.data);
    } catch (error) {
      console.error('GetData error:', error.response?.data || error.message);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`${api}/${id}`);
      await GetData();
    } catch (error) {
      console.error('Delete error:', error.response?.data || error.message);
    }
  }

  function handleEdit(item) {
    setEditItem(item);
    setOpen(true);
  }

  function handleAdd() {
    setEditItem(null);
    setOpen(true);
  }

  return (
    <div
      style={{
        background: `url(${img6}) no-repeat center center / cover`,
        minHeight: '100vh',
        width: '102.15%',
        marginLeft: "-16px",
        marginTop: "-100px"
      }}
    >
      <div className="pt-[120px] text-center">
        <Button
          variant="contained"
          sx={{ background: "#7772F1" }}
          onClick={handleAdd}
        >
          Add To-Do
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-6">
        {data.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-lg shadow-sm p-4 w-[250px] h-[120px] text-center relative"
          >
            <Link to={`/user/${e.id}`}>
              <p className="text-base font-semibold text-[#1E212C]">{e.name}</p>
            </Link>
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleEdit(e)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="error"
                onClick={() => handleDelete(e.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editItem ? 'Edit To-Do' : 'Add To-Do'}</DialogTitle>
        <Formik
          initialValues={{
            name: editItem?.name || '',
         
          }}
          validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
  const sendData = {
    ...values,
    description: '',
    images: ''
  };

  try {
    if (editItem) {
      await axios.put(`${api}/${editItem.id}`, sendData);
    } else {
      await axios.post(api, sendData);
    }
    await GetData();
    setOpen(false);
    resetForm();
  } catch (error) {
    console.error('Submit error:', error.response?.data || error.message);
  
  }
}}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form>
              <DialogContent>
                <TextField
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit" variant="contained">
                  {editItem ? 'Save' : 'Add'}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default CaseStudies;
