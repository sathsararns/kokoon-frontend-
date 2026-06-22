export default function ProfileInfo({
  profile,
  setProfile,
  editing,
}) {
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const InputField = ({
    label,
    name,
    value,
    readOnly = false,
  }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-1">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value || ""}
        readOnly={readOnly || !editing}
        onChange={handleChange}
        className={`w-full border rounded-lg p-3 transition
        ${
          readOnly || !editing
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white focus:ring-2 focus:ring-blue-500"
        }`}
      />
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <InputField
          label="First Name"
          name="firstName"
          value={profile.firstName}
        />

        <InputField
          label="Last Name"
          name="lastName"
          value={profile.lastName}
        />

        <InputField
          label="Email"
          name="email"
          value={profile.email}
          readOnly
        />

        <InputField
          label="Phone"
          name="phone"
          value={profile.phone}
        />

        <InputField
          label="Address"
          name="address"
          value={profile.address}
        />

        <InputField
          label="Location"
          name="location"
          value={profile.location}
        />

      </div>

    </div>
  );
}