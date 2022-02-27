const router = require("express").Router();

const Goal = require("../model/Goal");

router.get("/", async (req, res) => {
	const goals = await Goal.find();

	return res.status(200).json(goals);
});

router.post("/", async (req, res) => {
	const { name, priority } = req.body;

	const goal = await Goal.create({
		name,
		priority,
		labels: req.body.labels.split(","),
	});

	return res.status(201).json(goal);
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;

	const goal = await Goal.findById(id);

	return res.status(200).json(goal);
});

router.put("/:id", async (req, res) => {
	const id = req.params.id;

	const body = req.body;
	console.log(body);

	const updatedGoal = await Goal.findByIdAndUpdate(id, body, { new: true });

	console.log(updatedGoal);

	return res.status(201).json(updatedGoal);
});

module.exports = router;
