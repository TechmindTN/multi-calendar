// // controllers/durationTypeTypeController.js
// const DurationType = require('../models/DurationType');

// // Create a new durationTypeType
// exports.createDurationType = async (req, res) => {
//   const { unit, count } = req.body;

//   try {
//     const durationTypeType = await DurationType.create({
//       unit,
//       count,
//     });

//     res.status(201).json({
//       message: 'DurationType created successfully',
//       durationTypeType,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the durationTypeType' });
//   }
// };

// // Get all durationTypeTypes
// exports.getAllDurationTypes = async (req, res) => {
//   try {
//     const durationTypeTypes = await DurationType.findAll();
//     res.json(durationTypeTypes);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching durationTypeTypes' });
//   }
// };

// // Get a single durationTypeType by ID
// exports.getDurationTypeById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const durationTypeType = await DurationType.findByPk(id);

//     if (!durationTypeType) {
//       return res.status(404).json({ error: 'DurationType not found' });
//     }

//     res.json(durationType);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching the durationType' });
//   }
// };

// // Update a durationType
// exports.updateDurationType = async (req, res) => {
//   const { id } = req.params;
//   const { start_time, end_time } = req.body;

//   try {
//     const durationType = await DurationType.findByPk(id);

//     if (!durationType) {
//       return res.status(404).json({ error: 'DurationType not found' });
//     }

//     durationType.start_time = start_time || durationType.start_time;
//     durationType.end_time = end_time || durationType.end_time;

//     await durationType.save();
//     res.json({ message: 'DurationType updated successfully', durationType });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while updating the durationType' });
//   }
// };

// // Delete a durationType
// exports.deleteDurationType = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const durationType = await DurationType.findByPk(id);

//     if (!durationType) {
//       return res.status(404).json({ error: 'DurationType not found' });
//     }

//     await durationType.destroy();
//     res.json({ message: 'DurationType deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while deleting the durationTypeType' });
//   }
// };
