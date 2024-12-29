import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";


export function ManageTeam() {
  const teamMembers = [
    { name: 'John Doe', phone: '7329892389', email: 'john@gmail.com', date: 'Jan 4, 2024', access: 'Admin' },
    { name: 'Circooles', phone: '1234235346', email: 'john@gmail.com', date: 'Jan 4, 2024', access: 'Admin' },
    { name: 'Command+R', phone: '1776983421', email: 'john@gmail.com', date: 'Jan 2, 2024', access: 'Admin' },
    { name: 'Hourglass', phone: '4904576891', email: 'john@gmail.com', date: 'Jan 6, 2024', access: 'Admin' },
    { name: 'Layers', phone: '8754638290', email: 'john@gmail.com', date: 'Jan 8, 2024', access: 'Admin' },
    { name: 'Quotient', phone: '4254679845', email: 'john@gmail.com', date: 'Jan 6, 2024', access: 'Super Admin' },
    { name: 'Sisyphus', phone: '8009090900', email: 'john@gmail.com', date: 'Jan 4, 2024', access: 'Admin' },
  ];

  return (
    <div className="p-8">
      {/* Search and Add Button Section */}
      <div className="flex flex-col mb-7">
      <span className="text-black font-bold text-3xl">Manage team</span>
      <span className="text-gray-500 font-thin text-xl">view and manage your team members</span>
      </div>
      
      <div className="flex items-center mb-4 space-x-4">
        <Input
          type="text"
          placeholder="Search"
          className="flex-grow p-7 border rounded-lg shadow-md"
        />
        <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg">
          Invite Member
        </Button>
      </div>

      {/* Table */}
      <Table className="w-full bg-white shadow-xl rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className='text-black'>Team member</TableHead>
            <TableHead className='text-black'>Phone number</TableHead>
            <TableHead className='text-black'>Email address</TableHead>
            <TableHead className='text-black'>Date of joining</TableHead>
            <TableHead className='text-black'>Access type</TableHead>
            <TableHead className='text-black'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamMembers.map((member, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center space-x-4">
                <span className="rounded-full bg-gray-200 w-8 h-8 bg-"></span>
                <span>{member.name}</span>
              </TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.date}</TableCell>
              <TableCell>{member.access}</TableCell>
              <TableCell className="flex space-x-2">
                {/* Add action buttons here */}
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}