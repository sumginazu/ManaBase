// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { reduxForm, Field } from "redux-form";
// import { searchCards } from "../../actions";

// class Search_Bar extends Component {
//   render() {
//     const { handleSubmit } = this.props;
//     return (
//       <div>
//         <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//           <Field
//             label='searchTerm'
//             name='searchTerm'
//             component={this.textField}
//           />
//           <div>
//             <button type='submit' className='btn btn-primary'>
//               Search
//             </button>
//           </div>
//         </form>
//         <div />
//       </div>
//     );
//   }

//   textField(field) {
//     return (
//       <div>
//         <input
//           className='form-control'
//           type='text'
//           value={field.value}
//           {...field.input}
//         />
//       </div>
//     );
//   }

//   onSubmit(values) {
//     console.log(values);
//     this.props.searchCards(values.searchTerm);
//   }
// }

// function mapStateToProps(state) {
//   return { cards: state.cards };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ searchCards }, dispatch);
// }

// export default reduxForm({
//   form: "cardSearchForm"
// })(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Card_Search)
// );
