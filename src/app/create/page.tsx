"use client";
import React, { useEffect, useRef, useState } from "react";
import Item from "@/assets/Item.svg";
import Vehicle from "@/assets/Vehicle.svg";
import Home from "@/assets/Home.svg";
import Footer from "../../components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Button from "@/components/atoms/buttons/button";
import Imageupload from "../../components/atoms/icons/Imageupload.svg";
import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import axios from "axios";
// import { url } from "inspector";
import LoadingSpinner from "@/components/atoms/loadingSpinner";
import { isOnline } from "@/lib/checkOnlineStatus";
import Modal from "@/components/molecules/modals/viewImage";

const listingType = [
  {
    image: Item,
    title: "Item for Sale",
    description: "Create listing for single or multiple items to sell.",
  },
  {
    image: Vehicle,
    title: "Vehicle for Sale",
    description: "Create listing for your car, truck or other type of vehicles",
  },
  {
    image: Home,
    title: "Home for Sale/Rent",
    description:
      "Create listing for your single or multiple apartments available to sell/rent.",
  },
];

const vehicleTypes = ["Car", "Truck", "Motorcycle", "Bus"];

const homeTypes = [
  "Single-Family Home",
  "Apartment",
  "Condominium (Condo)",
  "Townhouse",
  "Duplex",
  "Triplex",
  "Fourplex",
  "Cooperative (Co-op)",
  "Mobile Home",
  "Modular Home",
  "Tiny House",
  "Mansion",
  "Cottage",
  "Log Cabin",
  "Bungalow",
  "Ranch-style House",
  "Colonial",
  "Victorian",
  "Contemporary",
  "Traditional",
  "Transitional",
];

const CreateListing: React.FC = () => {
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [productType, setProductType] = useState<number | null>(null);

  const imageRef = useRef<any>(null);
  const [imageUrl, setImageUrl] = useState<any>([]);
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productCondition, setProductCondition] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productLocation, setProductLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSpecification, setProductSpecification] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [homeListingtype, setHomeListingType] = useState("");
  const [homeType, setHomeType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageView, setImageView] = useState(false);
  const [image, setImage] = useState("");

  const onlineStatus = isOnline();

  const {
    loading: categoryLoading,
    error: categoryError,
    data: productCategories,
  } = useQuery(gql`
    query ProductCategoryCollection {
      productCategoryCollection(last: 100) {
        edges {
          node {
            name
            id
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
      }
    }
  `);

  const [addProduct, { data: addProductData, loading, error }] =
    useMutation(gql`
      mutation ProductCreate($input: ProductCreateInput!) {
        productCreate(input: $input) {
          product {
            name
            imageUrl(first: 100) {
              pageInfo {
                hasNextPage
              }
              edges {
                node {
                  url
                }
              }
            }
          }
        }
      }
    `);

  const productCategoryList =
    productCategories?.productCategoryCollection?.edges ?? [];

  // console.log(
  //   "productCategoryList is: ",
  //   productCategoryList,
  //   categoryLoading,
  //   categoryError
  // );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productType]);

  const handleGoBack = () => {
    // setSelectedType(null);
    setProductType(null);

    setProductTitle("");
    setProductCategory("");
    setProductCondition("");
    setProductPrice("");
    setProductLocation("");
    setPhoneNumber("");
    setProductDescription("");
    setProductSpecification("");

    setVehicleType("");
    setVehicleModel("");
    setVehicleYear("");

    setHomeListingType("");
    setHomeType("");
    setBedroom("");
    setBathroom("");
  };

  const clearInputField = () => {
    toast.success("Product created successfully");
    localStorage.removeItem("imageUrl");
    setProductTitle("");
    setProductCategory("");
    setProductCondition("");
    setProductPrice("");
    setProductLocation("");
    setPhoneNumber("");
    setProductDescription("");
    setProductSpecification("");
  };

  addProductData && clearInputField();

  const itemListingDetails = {
    imageUrl: imageUrl.map((image: any) => ({ create: { url: image.url } })),
    name: productTitle,
    category: {
      link: productCategory,
    },
    condition: productCondition,
    location: productLocation,
    phone: phoneNumber,
    price: productPrice,
    currency: "N",
    description: productDescription,
    // specifications: productSpecification,
    specifications: {
      create: {
        text: productSpecification,
      },
    },
    // slug: imageUrl
    //   .map((image: any) => ({
    //     create: { url: image.url },
    //   }))
    //   .map((item: any) => item.create.url)
    //   .join(""),
  };

  const vehicleListingDetails = {
    name: productTitle,
    vehicleType: vehicleType,
    vehicleYear: vehicleYear,
    vehicleModel: vehicleModel,
    condition: productCondition,
    location: productLocation,
    phone: phoneNumber,
    price: productPrice,
    currency: "N",
    description: productDescription,
    specifications: productSpecification,
  };

  const homeListingDetails = {
    name: productTitle,
    homeListingtype: homeListingtype,
    homeType: homeType,
    bedroom: bedroom,
    bathroom: bathroom,
    location: productLocation,
    phone: phoneNumber,
    price: productPrice,
    currency: "N",
    description: productDescription,
  };

  const submitProduct = async () => {
    if (onlineStatus) {
      if (imageUrl.length <= 0) {
        toast.error("Please add image of product");
      }
      if (productTitle === "") {
        toast.error("Please input a product title");
      }
      if (productCategory === "") {
        toast.error("please select a product category");
      }
      if (productCondition === "") {
        toast.error("please select a product condition");
      }
      if (productLocation === "") {
        toast.error("please input a product location");
      }
      if (phoneNumber === "") {
        toast.error("please input a phone number");
      }
      if (productPrice === "") {
        toast.error("please input a product price");
      }

      if (productCategory === "") {
        toast.error("Kindly add a description");
      }
      if (productCategory === "") {
        toast.error("please list out specifications of your product");
      } else {
        let input = itemListingDetails;

        // let specifications = itemListingDetails.specifications;
        // delete input.specifications;
        // const input = {

        //   specifications: {
        //     create: {
        //       text: itemListingDetails,
        //     },
        //   },
        // };
        const mutation = await addProduct({
          variables: {
            input,
          },
        });

        console.log("mutation", mutation);
        // clearInputField();
      }
    } else toast.error("Please connect device to the internet");
  };

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
  const preset: any = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_KEY;
  const apiKey: any = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret: any = process.env.NEXT_PUBLIC_CLOUDINARY_SECRET;

  const url: any = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const handleImage = async (e: any) => {
    if (onlineStatus) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", preset);

      try {
        setIsLoading(true);
        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const imageDetails: any = {
          url: response.data.secure_url,
          id: response.data.public_id,
        };

        setImageUrl([...imageUrl, imageDetails]);

        const updatedImageArray = [...imageUrl, imageDetails];

        localStorage.setItem("imageUrl", JSON.stringify(updatedImageArray));
      } catch (error) {
        toast.error("Image upload failled, Please try again");
        console.error("Error uploading image:", error);
      } finally {
        setIsLoading(false);
      }
    } else toast.error("Please connect device to the internet");
  };

  const handleDelete = async (publicId: string) => {
    if (onlineStatus) {
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/delete_by_token`,
          null,
          {
            params: {
              api_key: apiKey,
              api_secret: apiSecret,
              public_id: publicId,
            },
          }
        );

        if (response.status === 200) {
          toast.success("Image deleted successfully");
          console.log("delete is: ", response.status);
          // update delete
          const updatedDelete = imageUrl.filter(
            (item: any) => item.id !== item.id
          );
          setImageUrl(updatedDelete);
          localStorage.setItem("imageUrl", JSON.stringify(updatedDelete));
        } else {
          toast.error("Failed to delete image from cloud");
        }
      } catch (error) {
        console.error("Error deleting image:", error);
        toast.error("Error deleting image from cloud");
        // update delete
        const updatedDelete = imageUrl.filter(
          (item: any) => item.id !== publicId
        );
        setImageUrl(updatedDelete);
        localStorage.setItem("imageUrl", JSON.stringify(updatedDelete));
      }
    } else toast.error("Please connect device to the internet");
  };

  useEffect(() => {
    const storedImageDetails: any = localStorage.getItem("imageUrl");
    if (storedImageDetails) {
      const parsedDetails = JSON.parse(storedImageDetails);

      setImageUrl(parsedDetails);
    }
  }, []);

  const viewImage = (imageString: string) => {
    setImageView(true);
    setImage(imageString);
  };

  const closeModal = () => {
    setImageView(false);
  };

  return (
    <>
      <Navbar />
      <div className="w-[90%] py-24 mx-auto">
        {productType === null ? (
          <h2 className="lg:text-4xl text-3xl font-semibold mb-8">
            <span className="text-customGreen italic">Choose</span> listing type
          </h2>
        ) : (
          <h2 className="lg:text-4xl text-3xl font-semibold mb-8">
            {productType === 0 && (
              <span>
                Item Listing{" "}
                <span className="text-customGreen italic">Details</span>
              </span>
            )}
            {productType === 1 && (
              <span>
                Vehicle Listing{" "}
                <span className="text-customGreen italic">Details</span>
              </span>
            )}
            {productType === 2 && (
              <span>
                Home Listing{" "}
                <span className="text-customGreen italic">Details</span>
              </span>
            )}
          </h2>
        )}

        {productType === null ? (
          <div className="w-[90%] mx-auto lg:flex-row flex-col flex justify-between mb-16">
            {listingType.map((item, index) => (
              <div
                onClick={() => {
                  setSelectedType(index);
                }}
                key={index}
                className={`lg:w-[30%] ${
                  selectedType === index
                    ? "border-customGreen border-2"
                    : "border-[#ACACAC] border"
                } cursor-pointer hover:border-customGreen mb-5 lg:mb-0 p-5 lg:py-14 rounded-lg flex flex-col justify-center items-center`}
              >
                <div className="lg:w-44 w-20 h-14 lg:h-20">
                  <Image src={item.image} className="w-full h-full" alt="" />
                </div>
                <h3 className="lg:mb-3 lg:mt-5 mt-3 mb-2 font-semibold text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm text-[#585858] text-center w-full">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            {loading ? (
              <div className="relative">
                <LoadingSpinner />
              </div>
            ) : (
              <form
                action=""
                className="mx-auto mb-16 lg:w-[70%] border border-[#ACACAC] rounded-lg p-5"
              >
                <div className="border relative border-[#ACACAC] h-40 lg:h-80 w-full rounded-md flex flex-wrap mb-5 z-0">
                  {imageUrl.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="border-2 z-[5] relative rounded-lg border-customGreen p-1 w-[28%] h-[40%] m-2"
                    >
                      <span
                        onClick={() => handleDelete(item.id)}
                        className="text-white cursor-pointer z-[6] h-6 w-6 bg-customGreen p-1 font-extrabold rounded-full absolute right-1 top-1 flex items-center justify-center"
                      >
                        X
                      </span>
                      <Image
                        onClick={(e) => viewImage(item.url)}
                        src={item.url}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"
                        alt="Image"
                      />
                      {imageView && (
                        <Modal onClose={closeModal}>
                          <Image
                            src={image}
                            width={500}
                            height={500}
                            alt="Image"
                            className="lg:max-h-[80vh] h-full w-full rounded-lg"
                          />
                        </Modal>
                      )}
                    </div>
                  ))}

                  {imageUrl?.length <= 5 &&
                    (isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <div
                        onClick={() => imageRef.current.click()}
                        className="absolute cursor-pointer lg:backdrop-brightness-75 rounded-lg p-3 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center h-16 lg:h-auto justify-center"
                      >
                        <div className="rounded-full w-7 h-7 lg:w-16 lg:h-16 bg-[#CDCDCD66] flex justify-center items-center mb-3 lg:mb-5">
                          <Image
                            src={Imageupload}
                            className="w-8 h-6 lg:h-10 lg:w-10"
                            alt=""
                          />
                        </div>
                        <h3 className="font-semibold hidden lg:block lg:text-2xl text-xl mb-1 lg:mb-[6px]">
                          Add Photos
                        </h3>
                        <p className="lg:text-base text-xs text-center">
                          You can add up to six photos
                        </p>
                        <input
                          onChange={handleImage}
                          type="file"
                          ref={imageRef}
                          className="hidden"
                        />
                      </div>
                    ))}
                </div>

                <div className="mb-5 w-full">
                  <label
                    htmlFor="title"
                    className="text-semibold font-semibold"
                  >
                    Title
                  </label>
                  <br />
                  <input
                    type="text"
                    id="title"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Name of item"
                  />
                </div>

                {productType === 2 ? (
                  <>
                    <div className="w-full flex justify-between items-center flex-wrap">
                      <div className="lg:w-[48%] w-full mb-5">
                        <label
                          htmlFor="listing"
                          className="text-semibold font-semibold"
                        >
                          Listing Type
                        </label>
                        <br />

                        <select
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="listing"
                          defaultValue={"DEFAULT"}
                          onChange={(e) => setHomeListingType(e.target.value)}
                        >
                          <option
                            value="DEFAULT"
                            disabled
                            className="bg-[#CDCDCD66]"
                          >
                            Select
                          </option>
                          {homeTypes.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="lg:w-[48%] w-full mb-5">
                        <label
                          htmlFor="homeType"
                          className="text-semibold font-semibold"
                        >
                          Home Type
                        </label>
                        <br />

                        <select
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="homeType"
                          defaultValue={"DEFAULT"}
                          onChange={(e) => setHomeType(e.target.value)}
                        >
                          <option
                            value="DEFAULT"
                            disabled
                            className="bg-[#CDCDCD66]"
                          >
                            Select
                          </option>
                          <option value="For Rent">For Rent</option>
                          <option value="For Sale">For Sale</option>
                        </select>
                      </div>
                      <div className="lg:w-[48%] w-full mb-5">
                        <label
                          htmlFor="bedroom"
                          className="text-semibold font-semibold"
                        >
                          Number of Bedrooms
                        </label>
                        <br />
                        <input
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="bedroom"
                          value={bedroom}
                          onChange={(e) => setBedroom(e.target.value)}
                          placeholder="Number of Bedrooms"
                        />
                      </div>
                      <div className="lg:w-[48%] w-full mb-5">
                        <label
                          htmlFor="bathroom"
                          className="text-semibold font-semibold"
                        >
                          Number of Bathrooms
                        </label>
                        <br />
                        <input
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="bathroom"
                          value={bathroom}
                          onChange={(e) => setBathroom(e.target.value)}
                          placeholder="Number of Bathrooms"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full  flex justify-between items-center flex-wrap">
                      {productType === 0 ? (
                        <div className="lg:w-[48%] w-full mb-5">
                          <label
                            htmlFor="category"
                            className="text-semibold font-semibold"
                          >
                            Category
                          </label>
                          <br />

                          <select
                            className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                            name=""
                            id="category"
                            defaultValue={"DEFAULT"}
                            onChange={(e) => setProductCategory(e.target.value)}
                          >
                            <option
                              value="DEFAULT"
                              disabled
                              className="bg-[#CDCDCD66]"
                            >
                              Select
                            </option>
                            {productCategoryList?.map(
                              (item: any, index: any) => (
                                <option key={index} value={item.node.id}>
                                  {item.node.name}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      ) : (
                        <div className="lg:w-[48%] w-full mb-5">
                          <label
                            htmlFor="vehicleType"
                            className="text-semibold font-semibold"
                          >
                            Vehicle Type
                          </label>
                          <br />

                          <select
                            className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                            name=""
                            id="vehicleType"
                            defaultValue={"DEFAULT"}
                            onChange={(e) => setVehicleType(e.target.value)}
                          >
                            <option
                              value="DEFAULT"
                              disabled
                              className="bg-[#CDCDCD66]"
                            >
                              Select
                            </option>
                            {vehicleTypes.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      <div className="lg:w-[48%] w-full mb-5">
                        <label
                          htmlFor="condition"
                          className="text-semibold font-semibold"
                        >
                          Condition
                        </label>
                        <br />
                        <select
                          className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                          name=""
                          id="condition"
                          defaultValue={"DEFAULT"}
                          onChange={(e) => setProductCondition(e.target.value)}
                        >
                          <option
                            value="DEFAULT"
                            disabled
                            className="bg-[#CDCDCD66] text-gray-400"
                          >
                            Select
                          </option>
                          <option value="New" className="bg-[#CDCDCD66]">
                            New
                          </option>
                          <option value="Used" className="bg-[#CDCDCD66]">
                            Used
                          </option>
                        </select>
                      </div>
                    </div>
                    {productType === 1 && (
                      <div className="w-full mb-5 flex justify-between items-center">
                        <div className="lg:w-[48%] w-full">
                          <label
                            htmlFor="year"
                            className="text-semibold font-semibold"
                          >
                            Year
                          </label>
                          <br />

                          <input
                            className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                            name=""
                            id="year"
                            value={vehicleYear}
                            onChange={(e) => setVehicleYear(e.target.value)}
                            placeholder="2023"
                          />
                        </div>
                        <div className="lg:w-[48%] w-full">
                          <label
                            htmlFor="model"
                            className="text-semibold font-semibold"
                          >
                            Model
                          </label>
                          <br />
                          <input
                            className="p-3 w-full rounded-lg border bg-slate-50 border-gray-500"
                            name=""
                            id="model"
                            value={vehicleModel}
                            onChange={(e) => setVehicleModel(e.target.value)}
                            placeholder="Vehicle Model"
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
                <div className="w-full flex justify-between items-center flex-wrap mb-2">
                  <div className="mb-5 w-full">
                    <label
                      htmlFor="price"
                      className="text-semibold font-semibold"
                    >
                      Price
                    </label>
                    <br />
                    <input
                      type="text"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      id="price"
                      className="p-3 w-full rounded-lg border border-gray-500"
                      placeholder="Price of item"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between items-center flex-wrap">
                  <div className="lg:w-[48%] w-full mb-5">
                    <label
                      htmlFor="location"
                      className="text-semibold font-semibold"
                    >
                      Location
                    </label>
                    <br />
                    <input
                      type="text"
                      id="location"
                      value={productLocation}
                      onChange={(e) => setProductLocation(e.target.value)}
                      className="p-3 w-full rounded-lg border border-gray-500"
                      placeholder="Seller’s location"
                    />
                  </div>
                  <div className="lg:w-[48%] w-full mb-5">
                    <label
                      htmlFor="phone"
                      className="text-semibold font-semibold"
                    >
                      Phone Number
                    </label>
                    <br />
                    <input
                      type="text"
                      id="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="p-3 w-full rounded-lg border border-gray-500"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="w-full mb-5">
                  <label
                    htmlFor="decription"
                    className="text-semibold font-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    rows={3}
                    id="description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="p-4 w-full border border-[#ACACAC] rounded-lg"
                    placeholder="More detail of item"
                  />
                </div>
                {productType === 2 ? (
                  ""
                ) : (
                  <div className="w-full mb-5">
                    <label
                      htmlFor="specification"
                      className="text-semibold font-semibold"
                    >
                      Specification
                    </label>
                    <textarea
                      rows={3}
                      id="specification"
                      value={productSpecification}
                      onChange={(e) => setProductSpecification(e.target.value)}
                      className="p-4 w-full border border-[#ACACAC] rounded-lg"
                      placeholder="More detail of item"
                    />
                  </div>
                )}
              </form>
            )}

            <div className="w-[70%] mx-auto flex justify-between items-center">
              <div className="w-[40%] lg:w-[25%]">
                <button
                  onClick={() => handleGoBack()}
                  className="rounded-full border border-[#828282] hover:bg-gray-300 font-medium py-2 px-4 w-full flex justify-center items-center text-[#585858] text-base"
                >
                  Back
                </button>
              </div>

              <div className="w-[40%] lg:w-[25%]">
                <Button
                  onClick={() => {
                    submitProduct();
                  }}
                >
                  Create
                </Button>
              </div>
            </div>
          </>
        )}

        {productType === null && (
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="w-[40%] lg:w-[25%]">
              <Link
                href="/"
                className="rounded-full border border-[#828282] hover:bg-gray-300 font-medium py-2 px-4 w-full flex justify-center items-center text-[#585858] text-base"
              >
                Cancel
              </Link>
            </div>

            <div className="w-[40%] lg:w-[25%]">
              <Button
                onClick={() => {
                  selectedType === null
                    ? toast.error("Please select a listing type")
                    : setProductType(selectedType);
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CreateListing;
