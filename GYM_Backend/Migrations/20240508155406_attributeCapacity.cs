using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class attributeCapacity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "694e95f8-eeb1-43ee-84ea-76a10b990b08");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bfea142f-2435-4bd3-b1b3-6e75f966fa73");

            migrationBuilder.AddColumn<int>(
                name: "Capacity",
                table: "Classes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "24a99a06-d854-4ba6-bbb2-bc0157d6d654", null, "User", "USER" },
                    { "73a55ea4-019d-4738-8c6d-08efc30274af", null, "Instructor", "INSTRUCTOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "24a99a06-d854-4ba6-bbb2-bc0157d6d654");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73a55ea4-019d-4738-8c6d-08efc30274af");

            migrationBuilder.DropColumn(
                name: "Capacity",
                table: "Classes");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "694e95f8-eeb1-43ee-84ea-76a10b990b08", null, "User", "USER" },
                    { "bfea142f-2435-4bd3-b1b3-6e75f966fa73", null, "Instructor", "INSTRUCTOR" }
                });
        }
    }
}
