import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Api from "../../services/Api";

export function AddOffer(props) {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setHourlyRate("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title: title,
      description: description,
      start_date: startDate,
      end_date: endDate,
      hourly_rate: hourlyRate
    };
    console.log(formData);

    const response = await Api.AddOffer(
        formData.title,
        formData.description,
        formData.start_date,
        formData.end_date,
        formData.hourly_rate
      );

    onCloseModal();
    props.fetchUpdatedOffers();
  }

  
  return (
    <>
      <Button
        className="focus:ring-0 bg-yellow-300 text-slate-800 bg-opacity-80"
        onClick={() => setOpenModal(true)}
      >
        ADD OFFER
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-12">
            <form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="title" value="Your Offer Title" />
                <TextInput
                  id="title"
                  placeholder="Your Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description" value="Your Offer Description" />
                <TextInput
                  id="description"
                  placeholder="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div>
                  <Label htmlFor="start_date" value="Start Date" />
                  <input
                    name="start_date"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    placeholder="Select date start"
                  />
                </div>
                <div>
                  <Label htmlFor="end_date" value="End Date" />
                  <input
                    name="end_date"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    placeholder="Select date end"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="hourly_rate" value="Your Offer Hourly Rate" />
                
                <input name="hourly_rate"
                  value={hourlyRate}
                  onChange={(event) => setHourlyRate(event.target.value)}  type="number" id="number-input" aria-describedby="helper-text-explanation" className="w-1/2 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={1} placeholder="50.00" required />
              </div>
              <div className="w-full">
                <Button   
                   className="bg-slate-800" type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}