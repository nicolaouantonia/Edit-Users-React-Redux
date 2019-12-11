import React from 'react'
import { connect } from 'react-redux'
import { UserData } from '../../model/user'
import './EditModal.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Container, Row, Col } from 'react-bootstrap'
const Yup = require('yup')

export interface OwnProps {
  userData?: UserData
  handleSubmit: (userData: UserData) => void
}

export type EditModalProps = OwnProps

export class EditModal extends React.Component<EditModalProps, {}> {

  render() {
    /*eslint-disable */
    const websiteRegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    const zipRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/
    const coordRegExp = /^-?([1-8]?[0-9][0-9]|[1-9]0)\.{1}\d{1,10}/
    const phoneRegExp = /^[0-9\.\,\x\ \(\)\-]*$/

    return (
      <div className='editModal'>
        {this.props.userData &&
          <Formik
            initialValues={{
              name: this.props.userData.name,
              street: this.props.userData.address.street,
              suite: this.props.userData.address.suite,
              phone: this.props.userData.phone,
              city: this.props.userData.address.city,
              zipcode: this.props.userData.address.zipcode,
              lat: this.props.userData.address.geo.lat,
              lng: this.props.userData.address.geo.lng,
              email: this.props.userData.email,
              username: this.props.userData.username,
              website: this.props.userData.website,
              company: this.props.userData.company.name,
              catchPhrase: this.props.userData.company.catchPhrase,
              bs: this.props.userData.company.bs,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required('First Name is required'),
              street: Yup.string()
                .required('Street is required'),
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
              suite: Yup.string()
                .required('Suite is required'),
              city: Yup.string()
                .required('City is required'),
              phone: Yup.string()
                .matches(phoneRegExp, 'Phone is invalid')
                .required('Phone is required'),
              zipcode: Yup.string()
                .matches(zipRegExp, 'ZipCode is invalid')
                .required('ZipCode is required'),
              lat: Yup.string()
                .matches(coordRegExp, 'Latitude is invalid')
                .required('Latitude is required'),
              lng: Yup.string()
                .matches(coordRegExp, 'Longitude is invalid')
                .required('Longitude is required'),
              website: Yup.string()
                .matches(websiteRegExp, 'Website is invalid')
                .required('Website is required'),
              company: Yup.string()
                .required('Company is required'),
              catchPhrase: Yup.string()
                .required('Catch Phrase is required'),
              bs: Yup.string()
                .required('Bs is required'),
            })}

            onSubmit={fields => {
              if (this.props.userData) {
                const { username, name, street, email, suite, city, phone, zipcode, lat, lng, website, company, catchPhrase, bs } = fields
                const updatedUser = {
                  id: this.props.userData.id,
                  username,
                  name,
                  email,
                  phone,
                  website,
                  address: {
                    street,
                    suite,
                    city,
                    zipcode,
                    geo: {
                      lat,
                      lng
                    }
                  },
                  company: {
                    name: company,
                    catchPhrase,
                    bs
                  }
                }
                this.props.handleSubmit(updatedUser)
              }
            }}

            render={({ errors, status, touched }) => (
              <Form>
                <Container>
                  <Row>
                    <Col xs='12' lg='6'>
                      <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <Field name='username' disabled type='text' className={'form-control'} />
                      </div>
                    </Col>
                    <Col xs='12' lg='6'>
                      <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <Field name='name' type='text' className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                        <ErrorMessage name='name' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <Field name='phone' type='text' className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                        <ErrorMessage name='phone' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='website'>Website</label>
                        <Field name='website' type='text' className={'form-control' + (errors.website && touched.website ? ' is-invalid' : '')} />
                        <ErrorMessage name='website' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <Field name='email' type='text' className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name='email' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='street'>Street</label>
                        <Field name='street' type='text' className={'form-control' + (errors.street && touched.street ? ' is-invalid' : '')} />
                        <ErrorMessage name='street' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='suite'>Suite</label>
                        <Field name='suite' type='text' className={'form-control' + (errors.suite && touched.suite ? ' is-invalid' : '')} />
                        <ErrorMessage name='suite' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <Field name='city' type='text' className={'form-control' + (errors.city && touched.city ? ' is-invalid' : '')} />
                        <ErrorMessage name='city' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='zipcode'>ZipCode</label>
                        <Field name='zipcode' type='text' className={'form-control' + (errors.zipcode && touched.zipcode ? ' is-invalid' : '')} />
                        <ErrorMessage name='zipcode' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='lat'>Latitude</label>
                        <Field name='lat' type='text' className={'form-control' + (errors.lat && touched.lat ? ' is-invalid' : '')} />
                        <ErrorMessage name='lat' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                    <Col xs='12' lg='4'>
                      <div className='form-group'>
                        <label htmlFor='lng'>Longitude</label>
                        <Field name='lng' type='text' className={'form-control' + (errors.lng && touched.lng ? ' is-invalid' : '')} />
                        <ErrorMessage name='lng' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs='12' lg='6'>
                      <div className='form-group'>
                        <label htmlFor='company'>Company Name</label>
                        <Field name='company' type='text' className={'form-control' + (errors.company && touched.company ? ' is-invalid' : '')} />
                        <ErrorMessage name='company' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                    <Col xs='12' lg='6'>
                      <div className='form-group'>
                        <label htmlFor='catchPhrase'>CatchPhrase</label>
                        <Field name='catchPhrase' type='textarea' className={'form-control' + (errors.catchPhrase && touched.catchPhrase ? ' is-invalid' : '')} />
                        <ErrorMessage name='catchPhrase' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs='12' lg='6'>
                      <div className='form-group'>
                        <label htmlFor='bs'>Bs</label>
                        <Field name='bs' type='textarea' className={'form-control' + (errors.bs && touched.bs ? ' is-invalid' : '')} />
                        <ErrorMessage name='bs' component='div' className='invalid-feedback' />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='submitCol' xs='12' lg='12'>
                      <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Save Changes</button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Form>
            )}
          />
        }
      </div>
    )
  }
}


export default connect(null)(EditModal)