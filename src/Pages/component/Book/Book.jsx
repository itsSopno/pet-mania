import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext";

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { services, setBookingData, loading } = useContext(AuthContext);

  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({ name: "", number: "" });

  useEffect(() => {
    if (!loading && services.length > 0) {
      const found = services.find((s) => String(s.serviceId) === String(id));
      setSelectedService(found || null);
    }
  }, [services, id, loading]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedService) return;

    setBookingData({ ...formData, service: selectedService });

    Swal.fire({
      icon: "success",
      title: `Booking Confirmed for ${selectedService.serviceName}!`,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      didClose: () => navigate("/"),
    });

    setFormData({ name: "", number: "" });
  };

  if (loading) return <p className="text-white text-center py-10">Loading services...</p>;
  if (!selectedService) return <p className="text-white text-center py-10">Service not found 😕</p>;

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#27187e] gap-9 px-4 md:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
          {selectedService.serviceName}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-6 rounded shadow-md max-w-sm w-full"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="input input-bordered"
          required
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone number"
          className="input input-bordered"
          required
        />
        <button type="submit" className="btn bg-[#27187E] text-white hover:bg-[#1f1260]">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Book;
