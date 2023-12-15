import axios from "axios";
import "./css/AllTicket.css";
import { useQuery } from "@tanstack/react-query";

export const AllTicket = () => {
  const getApprovedTicket = async () => {
    try {
      const { data } = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/approved"
      );
      return data.items;
    } catch (err) {}
  };
  const deleteTicketAPI = async (ticketId) => {
    try {
      await axios.delete(
        `https://apex.oracle.com/pls/apex/jao_workspace/ticket-system/ticket/to-confirm/update/${ticketId}`
      );
    } catch (err) {}
  };

  const handleDelete = async (id) => {
    await deleteTicketAPI(id);
    data.refetch();
  };

  const data = useQuery({
    queryKey: ["ticketsConfirm"],
    queryFn: getApprovedTicket,
  });
  return (
    <div className="container-fluid">
      <div className="row all-ticket-container">
        <div className="col-12 mt-5">
          <div className="row">
            <div className="col-12">
              <div className="ms-5 list-title"> Confirmed Tickets</div>
              <div className="border"></div>
            </div>
            <div className="col-12 mt-2">
              {/* .map here below */}
              <div className="overflow-auto tickets-list-container">
                {data.isLoading && <h1>Loading...</h1>}
                <div className="row mx-1 justify-content-center">
                  {data?.data?.map((ticket) => {
                    return (
                      <div className="col-lg-5 mt-3 me-3 ticket-values-container-confirm">
                        <div className="row">
                          <div className="col-8">
                            <div className="row mt-2">
                              <div className="col-8">
                                <div className="ticket-logo">
                                  E-YORN AIRLINES
                                </div>
                                <div className="ticket-logo-2">
                                  Fly with the friendly skies
                                </div>
                              </div>
                              <div className="col-4 ticket-type">
                                {ticket.class}
                              </div>
                              <div className="border"></div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-6">
                                <div className="ticket-label">From</div>
                                <div className="ticket-value">
                                  {ticket.ticket_from}
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="ticket-label">To</div>
                                <div className="ticket-value">
                                  {ticket.ticket_to}
                                </div>
                              </div>
                              <div className="col-7 mt-4">
                                <div className="ticket-label">User ID</div>
                                <div className="ticket-value">
                                  {ticket.created_by}
                                </div>
                              </div>
                              <div className="col-5 mt-4"></div>
                              <div className="col-3 mt-4">
                                <div className="ticket-label">Departure</div>
                                <div className="ticket-value">
                                  {ticket.depart}
                                </div>
                              </div>
                              <div className="col-3 mt-4">
                                <div className="ticket-label">Return</div>
                                <div className="ticket-value">
                                  {ticket.return}
                                </div>
                              </div>
                              <div className="col-6 mt-4">
                                <div className="ticket-label">Price</div>
                                <div className="ticket-value">
                                  ₱ {ticket.price}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 ticket-picture d-flex justify-content-center align-items-end ">
                            <button
                              className="btn-delete-confirm mb-2"
                              onClick={() => handleDelete(ticket.ticket_id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
