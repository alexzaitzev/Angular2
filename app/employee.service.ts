export class EmployeeService
{
    getEmployee() : Employee[]
    {
        return [
            {
                Id: 1,
                Photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWQd6S3Ua282NvPgUIiY_xuI49vjw1wsnEhxbl8OWUanJ4gbg8",
                Location: { X: 344, Y: 197}
            },
            {
                Id: 2,
                Photo: "https://blog.interviewmocha.com/wp-content/uploads/2016/01/Scott-Hanselman-150x150.jpeg",
                Location: { X: 479, Y: 197}
            },
            {
                Id: 3,
                Photo: "https://pbs.twimg.com/profile_images/378800000550413574/1bda93983b282cc4572e4ae7f1fae3f4_400x400.jpeg",
                Location: { X: 623, Y: 197}
            }
        ];
    }
}

export class Employee
{
    Id: number;
    Photo: string;
    Location: Coordinates
}

export class Coordinates
{
    X: number;
    Y: number;
}