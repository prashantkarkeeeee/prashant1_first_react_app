import Box from "./box";

function Services() {
  const services = [
    {
      id: 1,
      title: "web development",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
    {
      id: 1,
      title: "web development",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
    {
      id: 1,
      title: "web development",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    },
    {
      id: 1,
      title: "web development",
      description:
        " We offer professional web development services to help you build fast,responsive, and user-friendly websites",
      buttonlebel: "view more",
    }
  ];

  return (
    <div className="bg-blue-50 pb-5 px-10" id="service">
      <p className="text-center font-semibold text-3xl pb-20 underline">
        Our Services
      </p>
      <div className=" flex justify-between gap-6 ">
        {services.map((services) => (
          <Box
            key={services.id}
            title={services.title}
            description={services.description}
            buttonlebel={services.buttonlebel}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
